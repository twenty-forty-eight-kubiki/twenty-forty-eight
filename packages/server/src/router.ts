import { Router } from 'express';
import { themeRouter } from './routes/theme.route.js';

export const router = Router();

router.use('/themes', themeRouter);
