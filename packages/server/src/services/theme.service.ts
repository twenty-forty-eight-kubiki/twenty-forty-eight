import { Theme } from '../models/theme.model.js';
import { UserService } from '../services/user.service.js';
import type { UpdateUserThemeDto } from '../dto/update-user-theme.dto.js';

export class ThemeService {
  static async updateUserTheme(dto: UpdateUserThemeDto) {
    const theme = await Theme.findOne({ where: { name: dto.name } });
    const user = await UserService.getUserById(dto.id);

    if (theme && user) {
      await user.update({ themeId: theme.id }, { where: { id: user.id } });
      return theme.name;
    }

    // Подумать над обработкой ошибок
    return false;
    console.log('Доработать ошибку!');
  }
}
