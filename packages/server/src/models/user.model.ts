import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table
} from 'sequelize-typescript';
import { Theme } from '../models/theme.model.js';

@Table({ tableName: 'user' })
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  userId: number;

  @ForeignKey(() => Theme)
  @Column({ type: DataType.INTEGER })
  themeId: number;
}
