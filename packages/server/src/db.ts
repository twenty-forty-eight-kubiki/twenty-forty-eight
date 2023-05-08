import { Sequelize } from 'sequelize-typescript';
import { Theme, User, Comment, Topic } from './models/index.js';

const {
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  NODE_ENV
} = process.env;

const sequelize = new Sequelize({
  host: POSTGRES_HOST || 'localhost',
  database: POSTGRES_DB,
  dialect: 'postgres',
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  models: [User, Theme, Topic, Comment]
});

export async function dbConnect() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: NODE_ENV === 'development' });
    console.log(`Successfully connected to ${POSTGRES_DB} database`);
  } catch (e) {
    throw new Error(`Unable to connect to the database: ${e}`);
  }
}
