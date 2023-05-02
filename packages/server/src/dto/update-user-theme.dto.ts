import { IsString, IsNumber } from 'class-validator';

export class UpdateUserThemeDto {
  @IsString({ message: 'Название темы должно быть строкой' })
  readonly name: string;

  @IsNumber({}, { message: 'ID пользователя должно быть числом' })
  readonly id: number;
}
