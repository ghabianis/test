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
import { Prisma, Post, Publication, Entreprise } from "@prisma/client";
import { PaginatedInterface } from "../../util/PaginatedInterface";
import { DbService } from "src/dbService/db.service";

export class PostServiceBase {
  constructor(protected readonly prisma: DbService) {}

  async count<T extends Prisma.PostFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostFindManyArgs>
  ): Promise<number> {
    return this.prisma.post.count(args);
  }

  async findMany<T extends Prisma.PostFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostFindManyArgs>
  ): Promise<PaginatedInterface<Post>> {
    const [data, totalCount] = await Promise.all([
      this.prisma.post.findMany(args),
      this.prisma.post.count(),
    ]);

    return { paginatedResult: data, totalCount };
  }
  async findOne<T extends Prisma.PostFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostFindUniqueArgs>
  ): Promise<Post | null> {
    return this.prisma.post.findUnique(args);
  }
  async create<T extends Prisma.PostCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostCreateArgs>
  ): Promise<Post> {
    return this.prisma.post.create<T>(args);
  }
  async update<T extends Prisma.PostUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostUpdateArgs>
  ): Promise<Post> {
    return this.prisma.post.update<T>(args);
  }
  async delete<T extends Prisma.PostUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostUpdateArgs>
  ): Promise<Post> {
    return this.prisma.post.update(args);
  }

  async getPublication(parentId: string): Promise<Publication | null> {
    return this.prisma.post
      .findUnique({
        where: { id: parentId },
      })
      .publication();
  }

  async getEntreprise(parentId: string): Promise<Entreprise | null> {
    return this.prisma.post
      .findUnique({
        where: { id: parentId },
      })
      .entreprise();
  }
}
