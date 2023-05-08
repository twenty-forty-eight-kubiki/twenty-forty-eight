import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript';
import { User } from './user.model.js';
import { Topic } from './topic.model.js';

@Table({ tableName: 'comment', timestamps: false })
export class Comment extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  comment_id: number;

  @Column({ type: DataType.STRING, allowNull: true })
  text: string;

  @Column({ type: DataType.DATE, allowNull: false })
  created_at: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  foreign_author_id: number;

  @BelongsTo(() => User)
  author: ReturnType<() => User>;

  @ForeignKey(() => Topic)
  @Column({ type: DataType.INTEGER })
  foreign_topic_id: number;

  @BelongsTo(() => Topic)
  topic: ReturnType<() => Topic>;
}
