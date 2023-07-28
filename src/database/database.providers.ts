import { CourseRefactorTest1690502446285 } from "../migrations/1690502446285-CourseRefactorTest"
import { DataSource } from "typeorm"

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'admin',
        database: 'devtraining',
        entities: [__dirname + '/../**/*.entity.js'],
        synchronize: false
      })
      return dataSource.initialize()
    }
  }
]

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'devtraining',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: false,
  migrations: [CourseRefactorTest1690502446285]
})