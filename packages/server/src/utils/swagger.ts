import { Express, Request, Response } from 'express';
import swaggerjsdoc from 'swagger-jsdoc';
import swaggerui from 'swagger-ui-express';

const options: swaggerjsdoc.Options = {
  definition: {
    openapi: '1.0.0',
    info: {
      title: 'Twenty Forty Eight Game API',
      version: '1.0.0'
    }
  },
  apis: ['./src/routes/*.ts', './src/models/*.ts']
};

const swaggerSpec = swaggerjsdoc(options);

function swaggerDocs(app: Express, port: number) {
  // Swagger page
  app.use('/docs', swaggerui.serve, swaggerui.setup(swaggerSpec));

  // Docs in JSON format
  app.get('docs.json', (_req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  console.log(`Docs available at http://localhost:${port}`);
}

export default swaggerDocs;
