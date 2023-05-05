import { createServer as createViteServer, type ViteDevServer } from 'vite';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { createRequire } from 'node:module';
import dotenv from 'dotenv';
import cors from 'cors';
import jsesc from 'jsesc';
import { dbConnect } from './db.js';
import { router } from './router.js';

dotenv.config();

import express from 'express';
import * as fs from 'fs';
import * as path from 'path';

const isDev = () => process.env.NODE_ENV === 'development';

async function startServer() {
  await dbConnect();
  const app = express();
  const port = Number(process.env.SERVER_PORT) || 3001;

  let vite: ViteDevServer | undefined;

  const require = createRequire(import.meta.url);
  const distPath = path.dirname(require.resolve('client/index.html'));
  const srcPath = path.dirname(require.resolve('client'));
  const ssrClientPath = require.resolve('client/ssr-dist/client.cjs');

  app.use(cors());

  if (isDev()) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: srcPath,
      appType: 'custom'
    });

    app.use(vite.middlewares);
  }

  app.use(
    '/api/v2',
    createProxyMiddleware({
      logLevel: isDev() ? 'debug' : 'info',
      changeOrigin: true,
      cookieDomainRewrite: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        '*': ''
      },
      target: 'https://ya-praktikum.tech'
    })
  );

  app.get('/api', router);

  if (!isDev()) {
    app.use('/assets', express.static(path.resolve(distPath, 'assets')));
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template: string;

      if (!isDev()) {
        template = fs.readFileSync(
          path.resolve(distPath, 'index.html'),
          'utf-8'
        );
      } else {
        template = fs.readFileSync(
          path.resolve(srcPath, 'index.html'),
          'utf-8'
        );

        template = await vite!.transformIndexHtml(url, template);
      }

      let render: () => Promise<string>;

      if (!isDev()) {
        render = (await import(ssrClientPath)).render;
      } else {
        render = (await vite!.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx')))
          .render;
      }

      const appHtml = await render();

      const ssrEntryStore = await vite!.ssrLoadModule(
        require.resolve('client/src/store/store')
      );

      const { createStore } = ssrEntryStore;

      const initialState = createStore().getState();

      const initialStateSerialized = jsesc(initialState, {
        json: true,
        isScriptContext: true
      });
      const storeState = `<script>window.__INITIAL_STATE__ = ${initialStateSerialized}</script>`;

      const html = template
        .replace(`<!--ssr-outlet-->`, appHtml)
        .replace('<!--store-state-->', storeState);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if (isDev()) {
        vite!.ssrFixStacktrace(e as Error);
      }
      next(e);
    }
  });

  app.listen(port, () => console.log(`Server is listening on port: ${port}`));
}

startServer();