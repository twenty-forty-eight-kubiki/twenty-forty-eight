import {
  Table,
  Column,
  DataType,
  Model,
  ForeignKey,
  BelongsTo,
  HasMany
} from 'sequelize-typescript';
import { User } from './user.model.js';
import { Comment } from './comment.model.js';

@Table({ tableName: 'topic', timestamps: false })
export class Topic extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  topic_id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  foeign_author_id: number;

  @BelongsTo(() => User)
  author: ReturnType<() => User>;

  @HasMany(() => Comment)
  comments: Comment[];
}
