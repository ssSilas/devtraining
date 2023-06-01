import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { TestService } from './test/test.service';
import { TestService } from './test/test.service';

@Module({
  imports: [
    CoursesModule,
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: 'db',
      port: 5432, 
      username: 'postgres',
      password: 'admin',
      database: 'devtraining',
      entities:[__dirname + '/**/*.entity.js'],
      autoLoadEntities: false,
      synchronize: false
    })
  ],
  controllers: [AppController],
  providers: [AppService, TestService],
})
export class AppModule { }
