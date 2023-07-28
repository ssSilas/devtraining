import { CoursesService } from "./courses.service"
import { NotFoundException } from "@nestjs/common";

describe('CoursesService', () => {
  let service: CoursesService;
  let id;
  let date;

  beforeEach(async () => {
    service =  new CoursesService();
    id = 'a66c1751-d821-48bb-ae99-a7b18d414021'
    date = new Date()
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
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
