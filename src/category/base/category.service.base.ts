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
import { Prisma, Category, Video } from "@prisma/client";
import { PaginatedInterface } from "../../util/PaginatedInterface";
import { DbService } from "src/dbService/db.service";

export class CategoryServiceBase {
  constructor(protected readonly prisma: DbService) {}

  async count<T extends Prisma.CategoryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryFindManyArgs>
  ): Promise<number> {
    return this.prisma.category.count(args);
  }

  async findMany<T extends Prisma.CategoryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryFindManyArgs>
  ): Promise<PaginatedInterface<Category>> {
    const [data, totalCount] = await Promise.all([
      this.prisma.category.findMany(args),
      this.prisma.category.count(),
    ]);

    return { paginatedResult: data, totalCount };
  }
  async findOne<T extends Prisma.CategoryFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryFindUniqueArgs>
  ): Promise<Category | null> {
    return this.prisma.category.findUnique(args);
  }
  async create<T extends Prisma.CategoryCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryCreateArgs>
  ): Promise<Category> {
    return this.prisma.category.create<T>(args);
  }
  async update<T extends Prisma.CategoryUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryUpdateArgs>
  ): Promise<Category> {
    return this.prisma.category.update<T>(args);
  }
  async delete<T extends Prisma.CategoryDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryDeleteArgs>
  ): Promise<Category> {
    return this.prisma.category.delete(args);
  }

  async findVideos(
    parentId: string,
    args: Prisma.VideoFindManyArgs
  ): Promise<Video[]> {
    return this.prisma.category
      .findUnique({
        where: { id: parentId },
      })
      .videos(args);
  }
}
