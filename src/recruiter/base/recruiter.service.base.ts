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
import { Prisma, Recruiter, Entreprise, User } from "@prisma/client";
import { PaginatedInterface } from "../../util/PaginatedInterface";
import { DbService } from "src/dbService/db.service";

export class RecruiterServiceBase {
  constructor(protected readonly prisma: DbService) {}

  async count<T extends Prisma.RecruiterFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecruiterFindManyArgs>
  ): Promise<number> {
    return this.prisma.recruiter.count(args);
  }

  async findMany<T extends Prisma.RecruiterFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecruiterFindManyArgs>
  ): Promise<PaginatedInterface<Recruiter>> {
    const [data, totalCount] = await Promise.all([
      this.prisma.recruiter.findMany(args),
      this.prisma.recruiter.count(),
    ]);

    return { paginatedResult: data, totalCount };
  }
  async findOne<T extends Prisma.RecruiterFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecruiterFindUniqueArgs>
  ): Promise<Recruiter | null> {
    return this.prisma.recruiter.findUnique(args);
  }
  async create<T extends Prisma.RecruiterCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecruiterCreateArgs>
  ): Promise<Recruiter> {
    return this.prisma.recruiter.create<T>(args);
  }
  async update<T extends Prisma.RecruiterUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecruiterUpdateArgs>
  ): Promise<Recruiter> {
    return this.prisma.recruiter.update<T>(args);
  }
  async delete<T extends Prisma.RecruiterDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecruiterDeleteArgs>
  ): Promise<Recruiter> {
    return this.prisma.recruiter.delete(args);
  }

  async getEntreprise(parentId: string): Promise<Entreprise | null> {
    return this.prisma.recruiter
      .findUnique({
        where: { id: parentId },
      })
      .entreprise();
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.recruiter
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}