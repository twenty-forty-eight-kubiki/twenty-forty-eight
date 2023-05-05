import { Router } from 'express';
import { ThemeController } from '../controllers/theme.controller.js';

export const themeRouter = Router();

themeRouter.put('/', ThemeController.updateUserTheme);
