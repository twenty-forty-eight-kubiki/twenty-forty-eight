import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
// import { rollup, InputOptions, OutputOptions } from 'rollup'
// import rollupPluginTypescript from 'rollup-plugin-typescript'
// import { nodeResolve } from '@rollup/plugin-node-resolve'
// import { VitePWA } from 'vite-plugin-pwa'
dotenv.config()

// const CompileTsServiceWorker = () => ({
//   name: 'compile-typescript-service-worker',
//   async writeBundle(_options, _outputBundle) {
//     const inputOptions: InputOptions = {
//       input: 'sw.js',
//       plugins: [rollupPluginTypescript(), nodeResolve()],
//     }
//     const outputOptions: OutputOptions = {
//       file: 'dist/sw.js',
//       format: 'es',
//     }
//     const bundle = await rollup(inputOptions)
//     await bundle.write(outputOptions)
//     await bundle.close()
//   },
// })

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
  plugins: [
    react(),
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   workbox: {
    //     importScripts: ['./sw-functional.js'],
    //     globIgnores: ['**/node_modules/**/*', '**/sw.js'],
    //   },
    // }),
    // CompileTsServiceWorker(),
  ],
})
