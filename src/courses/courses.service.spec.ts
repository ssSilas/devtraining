import { CoursesService } from "./courses.service"
import { NotFoundException } from "@nestjs/common";
import { CreateCourseDto } from "./dto/create-course.dto";

describe('CoursesService', () => {
  let service: CoursesService;
  let id;
  let date;

  beforeEach(async () => {
    service = new CoursesService();
    id = 'a66c1751-d821-48bb-ae99-a7b18d414021'
    date = new Date()
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should create of a course', async () => {
    const expectOutputTags = [{
      id,
      name: 'nestjs',
      create_at: date
    }]

    const expectOutputCourse = [{
      id,
      name: 'Test',
      description: 'Test description',
      create_at: date,
      tags: expectOutputTags
    }]

    const mockCourseRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse))
    }
    const mockTagRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutputTags)),
      findOne: jest.fn()
    }

    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository;
    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepository

    const createCourseDto: CreateCourseDto = {
      name: 'Test',
      description: 'Test description',
      tags: ['nestjs']
    }
    const newCourse = await service.create(createCourseDto)
    expect(mockCourseRepository.save).toHaveBeenCalled()
    expect(expectOutputCourse).toStrictEqual(newCourse)
  });

  // describe('findOne', () => {
  //   describe('buscar curso pelo ID', () => {
  //     it('deve retornar obj Course', async () => {
  //       const courseId = '1'
  //       const expectedCourse = {}

  //       courseRepo.findOne.mockReturnValue(expectedCourse)
  //       const course = await service.findOne(courseId)
  //       expect(course).toEqual(expectedCourse)
  //     })

  //     it('deve retornar error NotFound', async () => {
  //       const courseId = '1'
  //       courseRepo.findOne.mockReturnValue(undefined)

  //       try {
  //         await service.findOne(courseId)
  //       } catch (error) {
  //         console.log(error)
  //         expect(error).toBeInstanceOf(NotFoundException)
  //         expect(error.message).toEqual(`Course ID ${courseId} not found`)
  //       }
  //     })
  //   })
  // })
});
