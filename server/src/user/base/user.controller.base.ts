/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { UserService } from "../user.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserCreateInput } from "./UserCreateInput";
import { UserWhereInput } from "./UserWhereInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserUpdateInput } from "./UserUpdateInput";
import { User } from "./User";
import { AccountFindManyArgs } from "../../account/base/AccountFindManyArgs";
import { Account } from "../../account/base/Account";
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";
import { DocumentFindManyArgs } from "../../document/base/DocumentFindManyArgs";
import { Document } from "../../document/base/Document";
import { DocumentWhereUniqueInput } from "../../document/base/DocumentWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserControllerBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.create({
      data: data,
      select: {
        address: true,
        businessName: true,
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phoe: true,
        roles: true,
        status: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(UserFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        address: true,
        businessName: true,
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phoe: true,
        roles: true,
        status: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        address: true,
        businessName: true,
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phoe: true,
        roles: true,
        status: true,
        updatedAt: true,
        username: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          address: true,
          businessName: true,
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          phoe: true,
          roles: true,
          status: true,
          updatedAt: true,
          username: true,
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

  @nestAccessControl.UseRoles({
    resource: "User",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          address: true,
          businessName: true,
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          phoe: true,
          roles: true,
          status: true,
          updatedAt: true,
          username: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/accounts")
  @ApiNestedQuery(AccountFindManyArgs)
  async findManyAccounts(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Account[]> {
    const query = plainToClass(AccountFindManyArgs, request.query);
    const results = await this.service.findAccounts(params.id, {
      ...query,
      select: {
        availableBalance: true,
        balance: true,
        createdAt: true,
        currency: true,
        description: true,
        id: true,
        name: true,
        status: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/accounts")
  async connectAccounts(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: AccountWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accounts: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/accounts")
  async updateAccounts(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: AccountWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accounts: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/accounts")
  async disconnectAccounts(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: AccountWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accounts: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Document",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/documents")
  @ApiNestedQuery(DocumentFindManyArgs)
  async findManyDocuments(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Document[]> {
    const query = plainToClass(DocumentFindManyArgs, request.query);
    const results = await this.service.findDocuments(params.id, {
      ...query,
      select: {
        createdAt: true,
        documentType: true,
        id: true,
        status: true,
        updatedAt: true,
        url: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/documents")
  async connectDocuments(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: DocumentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documents: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/documents")
  async updateDocuments(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: DocumentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documents: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/documents")
  async disconnectDocuments(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: DocumentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documents: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
