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
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { PaginatedInterface } from "../../util/PaginatedInterface";
import { CommentService } from "../comment.service";
import { CommentCreateInput } from "./CommentCreateInput";
import { CommentWhereInput } from "./CommentWhereInput";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";
import { CommentFindManyArgs } from "./CommentFindManyArgs";
import { CommentUpdateInput } from "./CommentUpdateInput";
import { Comment } from "./Comment";
import { Post } from "../../post/base/Post";
import { getListCommentDto } from "./getListComment.dto";
@swagger.ApiBearerAuth()
export class CommentControllerBase {
  constructor(
    protected readonly service: CommentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Comment })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: CommentCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Comment> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Comment",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Comment"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        content: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: getListCommentDto })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => CommentFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<PaginatedInterface<Comment>> {
    const args = plainToClass(CommentFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Comment",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        content: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    const result = results.paginatedResult.map((result: Comment) =>
      permission.filter(result)
    );
    return { paginatedResult: result, totalCount: results.totalCount };
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Comment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: CommentWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Comment | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Comment",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        content: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Comment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: CommentWhereUniqueInput,
    @common.Body()
    data: CommentUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Comment | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Comment",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Comment"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          content: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Comment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: CommentWhereUniqueInput
  ): Promise<Comment | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          content: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
