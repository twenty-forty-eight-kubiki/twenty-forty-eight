import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({ tableName: 'theme' })
export class Theme extends Model<Theme> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  themeId: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;
}
