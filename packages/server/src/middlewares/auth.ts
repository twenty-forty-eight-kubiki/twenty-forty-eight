import type { RequestHandler } from 'express';
import { getCurrentUser } from '../http/user.js';
import httpContext from 'express-http-context';

export const authContext: RequestHandler = async (req, _res, next) => {
  const user = await getCurrentUser(req);
  httpContext.set('user', user);
  next();
};
