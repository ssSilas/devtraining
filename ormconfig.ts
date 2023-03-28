import { DataSource } from "typeorm";

export const connectionSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'devtraining',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  // cli: {
  //   migrationsDir: 'src/migrations/*.ts'
  // }
});