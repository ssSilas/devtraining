import { Test, TestingModule } from "@nestjs/testing";
import { CoursesService } from "./courses.service"
import { Connection, Repository } from "typeorm";
import { getRepositoryToken } from "@nestjs/typeorm";
import { CourseEntity } from "./entities/tag.entity/course.entity";
import { TagEntity } from "./entities/tag.entity/tag.entity";
import { NotFoundException } from "@nestjs/common";

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

const createMockRepository = <T = any>(): MockRepository<T> => ({
  findOne: jest.fn()
})

describe('CoursesService', () => {
  let service: CoursesService;
  let courseRepo: MockRepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CoursesService,
        { provide: Connection, useValue: {} },
        { provide: getRepositoryToken(CourseEntity), useValue: createMockRepository() },
        { provide: getRepositoryToken(TagEntity), useValue: createMockRepository() },
      ],
    }).compile();

    service = module.get<CoursesService>(CoursesService);
    courseRepo = module.get<MockRepository>(getRepositoryToken(CourseEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    describe('buscar curso pelo ID', () => {
      it('deve retornar obj Course', async () => {
        const courseId = '1'
        const expectedCourse = {}

        courseRepo.findOne.mockReturnValue(expectedCourse)
        const course = await service.findOne(courseId)
        expect(course).toEqual(expectedCourse)
      })

      it('deve retornar error NotFound', async () => {
        const courseId = '1'
        courseRepo.findOne.mockReturnValue(undefined)

        try {
          await service.findOne(courseId)
        } catch (error) {
          console.log(error)
          expect(error).toBeInstanceOf(NotFoundException)
          expect(error.message).toEqual(`Course ID ${courseId} not found`)
        }
      })
    })
  })
});
