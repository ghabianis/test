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

import {
  Prisma,
  Community,
  OffersOnCommunity,
  PublicationsOnCommunity,
  UsersOnCommunity,
  EntreprisesOnCommunity,
} from "@prisma/client";

import { PaginatedInterface } from "../../util/PaginatedInterface";
import { DbService } from "src/dbService/db.service";

export class CommunityServiceBase {
  constructor(protected readonly prisma: DbService) {}

  async count<T extends Prisma.CommunityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommunityFindManyArgs>
  ): Promise<number> {
    return this.prisma.community.count(args);
  }

  async findMany<T extends Prisma.CommunityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommunityFindManyArgs>
  ): Promise<PaginatedInterface<Community>> {
    const [data, totalCount] = await Promise.all([
      this.prisma.community.findMany(args),
      this.prisma.community.count(),
    ]);

    return { paginatedResult: data, totalCount };
  }
  async findOne<T extends Prisma.CommunityFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommunityFindUniqueArgs>
  ): Promise<Community | null> {
    return this.prisma.community.findUnique(args);
  }
  async create<T extends Prisma.CommunityCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommunityCreateArgs>
  ): Promise<Community> {
    return this.prisma.community.create<T>(args);
  }
  async update<T extends Prisma.CommunityUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommunityUpdateArgs>
  ): Promise<Community> {
    return this.prisma.community.update<T>(args);
  }
  async delete<T extends Prisma.CommunityDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommunityDeleteArgs>
  ): Promise<Community> {
    return this.prisma.community.delete(args);
  }

  async findOffersOnCommunities(
    parentId: string,
    args: Prisma.OffersOnCommunityFindManyArgs
  ): Promise<OffersOnCommunity[]> {
    return this.prisma.community
      .findUnique({
        where: { id: parentId },
      })
      .offersOnCommunities(args);
  }

  async findPublicationsOnCommunities(
    parentId: string,
    args: Prisma.PublicationsOnCommunityFindManyArgs
  ): Promise<PublicationsOnCommunity[]> {
    return this.prisma.community
      .findUnique({
        where: { id: parentId },
      })
      .publicationsOnCommunities(args);
  }

  async findUsersOnCommunities(
    parentId: string,
    args: Prisma.UsersOnCommunityFindManyArgs
  ): Promise<UsersOnCommunity[]> {
    return this.prisma.community
      .findUnique({
        where: { id: parentId },
      })
      .usersOnCommunities(args);
  }

  async findEntreprisesOnCommunities(
    parentId: string,
    args: Prisma.EntreprisesOnCommunityFindManyArgs
  ): Promise<EntreprisesOnCommunity[]> {
    return this.prisma.community
      .findUnique({
        where: { id: parentId },
      })
      .entreprisesOnCommunities(args);
  }
}
