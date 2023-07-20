import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { DatabaseModule } from './database/database.module';
import { InjectDataSource, TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    DatabaseModule,
    CoursesModule,
    // TypeOrmModule.forRoot({
    //   type: 'postgres', 
    //   host: 'db',
    //   port: 5432, 
    //   username: 'postgres',
    //   password: 'admin',
    //   database: 'devtraining',
    //   entities:[__dirname + '/**/*.entity.js'],
    //   autoLoadEntities: false,
    //   synchronize: false
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
