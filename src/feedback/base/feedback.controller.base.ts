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
import { FeedbackService } from "../feedback.service";
import { FeedbackCreateInput } from "./FeedbackCreateInput";
import { FeedbackWhereInput } from "./FeedbackWhereInput";
import { FeedbackWhereUniqueInput } from "./FeedbackWhereUniqueInput";
import { FeedbackFindManyArgs } from "./FeedbackFindManyArgs";
import { FeedbackUpdateInput } from "./FeedbackUpdateInput";
import { Feedback } from "./Feedback";
import { Post } from "../../post/base/Post";
import { getListFeedbackDto } from "./getListFeedback.dto";
@swagger.ApiBearerAuth()
export class FeedbackControllerBase {
  constructor(
    protected readonly service: FeedbackService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Feedback",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Feedback })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: FeedbackCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Feedback> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Feedback",
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
        `providing the properties: ${properties} on ${"Feedback"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        offer: data.offer
          ? {
              connect: data.offer,
            }
          : undefined,

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
        contenu: true,
        statue: true,
        type: true,

        offer: {
          select: {
            id: true,
          },
        },

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
    resource: "Feedback",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: getListFeedbackDto })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => FeedbackFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<PaginatedInterface<Feedback>> {
    const args = plainToClass(FeedbackFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Feedback",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        contenu: true,
        statue: true,
        type: true,

        offer: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    const result = results.paginatedResult.map((result: Feedback) =>
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
    resource: "Feedback",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Feedback })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: FeedbackWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Feedback | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Feedback",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        contenu: true,
        statue: true,
        type: true,

        offer: {
          select: {
            id: true,
          },
        },

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
    resource: "Feedback",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Feedback })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: FeedbackWhereUniqueInput,
    @common.Body()
    data: FeedbackUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Feedback | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Feedback",
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
        `providing the properties: ${properties} on ${"Feedback"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          offer: data.offer
            ? {
                connect: data.offer,
              }
            : undefined,

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
          contenu: true,
          statue: true,
          type: true,

          offer: {
            select: {
              id: true,
            },
          },

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
    resource: "Feedback",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Feedback })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: FeedbackWhereUniqueInput
  ): Promise<Feedback | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          contenu: true,
          statue: true,
          type: true,

          offer: {
            select: {
              id: true,
            },
          },

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
