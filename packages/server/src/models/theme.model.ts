import { Table, Column, DataType, Model, HasMany } from 'sequelize-typescript';
import { User } from './user.model.js';

@Table({ tableName: 'theme', timestamps: false })
export class Theme extends Model<Theme> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  theme_id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @HasMany(() => User)
  users: User[];
}
