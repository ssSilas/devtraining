import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CourseEntity } from './course.entity';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CoursesService {
  private courses: CourseEntity[] = [
    {
      id: 1,
      name: "Fundamento NESTJS",
      description: "Fundamento",
      tags: ['node.js, nestjs, javascript']
    }
  ]

  findAll() {
    return this.courses
  }

  findOne(id: number) {
    const course = this.courses.find((course: CourseEntity) => course.id == id)
    if (!course) {
      throw new HttpException(
        "Course not found",
        HttpStatus.NOT_FOUND
      )
    }
    return course
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto)
    return createCourseDto
  }

  update(id: number, updateCourseDto: any) {
    const indexCourse = this.courses.findIndex(course => course.id == id)
    this.courses[indexCourse]

    if (indexCourse > 0) {
      this.courses.splice(indexCourse, 1)
    }
  }
}
