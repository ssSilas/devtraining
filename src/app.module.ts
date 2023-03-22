import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    CoursesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5433,
      username: 'postgres',
      password: 'admin',
      database: 'devtraining',
      autoLoadEntities: true,
      synchronize: false
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
