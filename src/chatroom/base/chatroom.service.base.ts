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
  Chatroom,
  CandidatesOnChatroom,
  Entreprise,
} from "@prisma/client";
import { PaginatedInterface } from "../../util/PaginatedInterface";
import { DbService } from "src/dbService/db.service";

export class ChatroomServiceBase {
  constructor(protected readonly prisma: DbService) {}

  async count<T extends Prisma.ChatroomFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChatroomFindManyArgs>
  ): Promise<number> {
    return this.prisma.chatroom.count(args);
  }

  async findMany<T extends Prisma.ChatroomFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChatroomFindManyArgs>
  ): Promise<PaginatedInterface<Chatroom>> {
    const [data, totalCount] = await Promise.all([
      this.prisma.chatroom.findMany(args),
      this.prisma.chatroom.count(),
    ]);

    return { paginatedResult: data, totalCount };
  }
  async findOne<T extends Prisma.ChatroomFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChatroomFindUniqueArgs>
  ): Promise<Chatroom | null> {
    return this.prisma.chatroom.findUnique(args);
  }
  async create<T extends Prisma.ChatroomCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChatroomCreateArgs>
  ): Promise<Chatroom> {
    return this.prisma.chatroom.create<T>(args);
  }
  async update<T extends Prisma.ChatroomUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChatroomUpdateArgs>
  ): Promise<Chatroom> {
    return this.prisma.chatroom.update<T>(args);
  }
  async delete<T extends Prisma.ChatroomDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChatroomDeleteArgs>
  ): Promise<Chatroom> {
    return this.prisma.chatroom.delete(args);
  }

  async findCandidatesOnChatrooms(
    parentId: string,
    args: Prisma.CandidatesOnChatroomFindManyArgs
  ): Promise<CandidatesOnChatroom[]> {
    return this.prisma.chatroom
      .findUnique({
        where: { id: parentId },
      })
      .candidatesOnChatrooms(args);
  }

  async getEntreprise(parentId: string): Promise<Entreprise | null> {
    return this.prisma.chatroom
      .findUnique({
        where: { id: parentId },
      })
      .entreprise();
  }
}