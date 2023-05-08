import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  HasMany
} from 'sequelize-typescript';
import { Theme } from '../models/theme.model.js';
import { Topic } from './topic.model.js';
import { Comment } from './comment.model.js';

@Table({ tableName: 'user', timestamps: false })
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  user_id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  first_name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  second_name: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  login: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  phone: string;

  @Column({ type: DataType.STRING, allowNull: true })
  display_name: string;

  @Column({ type: DataType.STRING, allowNull: true })
  avatar: string;

  @ForeignKey(() => Theme)
  @Column({ type: DataType.INTEGER })
  foreign_theme_id: number;

  @BelongsTo(() => Theme)
  theme: ReturnType<() => Theme>;

  @HasMany(() => Topic)
  topics: Topic[];

  @HasMany(() => Comment)
  comments: Comment[];
}
