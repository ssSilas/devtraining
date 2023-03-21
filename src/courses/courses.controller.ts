import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) { }
  @Get()
  findAll() {
    return this.coursesService.findAll()
  }

  @Get(':id')
  findOne(@Param() id: number) {
    return this.coursesService.findOne(id)
  }

  @Post()
  create(@Body() createCourseDto:CreateCourseDto) {
    return this.coursesService.create(createCourseDto)
  }

  @Post()
  update(@Param() id: number, @Body() body) {
    return this.coursesService.update(id, body)
  }

  // @Delete(':id')
  // remove(@Param('id') id: number) {
  //   return this.coursesService.remove(id)
  // }
}

//continuar do 11
