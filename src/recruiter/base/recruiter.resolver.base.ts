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
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { PaginatedInterface } from "../../util/PaginatedInterface";
import { CreateRecruiterArgs } from "./CreateRecruiterArgs";
import { UpdateRecruiterArgs } from "./UpdateRecruiterArgs";
import { DeleteRecruiterArgs } from "./DeleteRecruiterArgs";
import { RecruiterFindManyArgs } from "./RecruiterFindManyArgs";
import { RecruiterFindUniqueArgs } from "./RecruiterFindUniqueArgs";
import { Recruiter } from "./Recruiter";
import { Entreprise } from "../../entreprise/base/Entreprise";
import { User } from "../../user/base/User";
import { RecruiterService } from "../recruiter.service";

@graphql.Resolver(() => Recruiter)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class RecruiterResolverBase {
  constructor(
    protected readonly service: RecruiterService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Recruiter",
    action: "read",
    possession: "any",
  })
  async _recruitersMeta(
    @graphql.Args() args: RecruiterFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Recruiter])
  @nestAccessControl.UseRoles({
    resource: "Recruiter",
    action: "read",
    possession: "any",
  })
  async recruiters(
    @graphql.Args() args: RecruiterFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<PaginatedInterface<Recruiter>> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Recruiter",
    });
    const results = await this.service.findMany(args);
    const result = results.paginatedResult.map((result: Recruiter) =>
      permission.filter(result)
    );
    return { paginatedResult: result, totalCount: results.totalCount };
  }

  @graphql.Query(() => Recruiter, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Recruiter",
    action: "read",
    possession: "own",
  })
  async recruiter(
    @graphql.Args() args: RecruiterFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Recruiter | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Recruiter",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Recruiter)
  @nestAccessControl.UseRoles({
    resource: "Recruiter",
    action: "create",
    possession: "any",
  })
  async createRecruiter(
    @graphql.Args() args: CreateRecruiterArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Recruiter> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Recruiter",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Recruiter"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        entreprise: args.data.entreprise
          ? {
              connect: args.data.entreprise,
            }
          : undefined,

        user: {
          connect: args.data.user,
        },
      },
    });
  }

  @graphql.Mutation(() => Recruiter)
  @nestAccessControl.UseRoles({
    resource: "Recruiter",
    action: "update",
    possession: "any",
  })
  async updateRecruiter(
    @graphql.Args() args: UpdateRecruiterArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Recruiter | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Recruiter",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Recruiter"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          entreprise: args.data.entreprise
            ? {
                connect: args.data.entreprise,
              }
            : undefined,

          user: {
            connect: args.data.user,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Recruiter)
  @nestAccessControl.UseRoles({
    resource: "Recruiter",
    action: "delete",
    possession: "any",
  })
  async deleteRecruiter(
    @graphql.Args() args: DeleteRecruiterArgs
  ): Promise<Recruiter | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Entreprise, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Recruiter",
    action: "read",
    possession: "any",
  })
  async entreprise(
    @graphql.Parent() parent: Recruiter,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Entreprise | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Entreprise",
    });
    const result = await this.service.getEntreprise(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Recruiter",
    action: "read",
    possession: "any",
  })
  async user(
    @graphql.Parent() parent: Recruiter,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "User",
    });
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
