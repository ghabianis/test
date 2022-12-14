/*
//------------------------------------------------------------------------------ 
// This code was generated by Amplication. 
// 
// Changes to this file will be lost if the code is regenerated. 
//
// There are other ways to to customize your code, see this doc to learn more
// https://docs.amplication.com/docs/how-to/custom-code
//
//------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Course, Candidate } from "@prisma/client";
import { PaginatedInterface } from "../../util/PaginatedInterface";
import { DbService } from "src/dbService/db.service";

export class CourseServiceBase {
  constructor(protected readonly prisma: DbService) {}

  async count<T extends Prisma.CourseFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseFindManyArgs>
  ): Promise<number> {
    return this.prisma.course.count(args);
  }

  async findMany<T extends Prisma.CourseFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseFindManyArgs>
  ): Promise<PaginatedInterface<Course>> {
    const [data, totalCount] = await Promise.all([
      this.prisma.course.findMany(args),
      this.prisma.course.count(),
    ]);

    return { paginatedResult: data, totalCount };
  }
  async findOne<T extends Prisma.CourseFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseFindUniqueArgs>
  ): Promise<Course | null> {
    return this.prisma.course.findUnique(args);
  }
  async create<T extends Prisma.CourseCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseCreateArgs>
  ): Promise<Course> {
    return this.prisma.course.create<T>(args);
  }
  async update<T extends Prisma.CourseUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseUpdateArgs>
  ): Promise<Course> {
    return this.prisma.course.update<T>(args);
  }
  async delete<T extends Prisma.CourseDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseDeleteArgs>
  ): Promise<Course> {
    return this.prisma.course.delete(args);
  }

  async getCandidate(parentId: string): Promise<Candidate | null> {
    return this.prisma.course
      .findUnique({
        where: { id: parentId },
      })
      .candidate();
  }
}
