import type { Request, Response } from 'express';
import { ThemeService } from '../services/theme.service.js';

export class ThemeController {
  static async updateUserTheme(req: Request, res: Response) {
    const result = await ThemeService.updateUserTheme(req.body);

    return res.status(200).send(result);
  }
}
