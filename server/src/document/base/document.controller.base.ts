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
import { DocumentService } from "../document.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DocumentCreateInput } from "./DocumentCreateInput";
import { DocumentWhereInput } from "./DocumentWhereInput";
import { DocumentWhereUniqueInput } from "./DocumentWhereUniqueInput";
import { DocumentFindManyArgs } from "./DocumentFindManyArgs";
import { DocumentUpdateInput } from "./DocumentUpdateInput";
import { Document } from "./Document";
import { AccountFindManyArgs } from "../../account/base/AccountFindManyArgs";
import { Account } from "../../account/base/Account";
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";
@swagger.ApiBasicAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DocumentControllerBase {
  constructor(
    protected readonly service: DocumentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Document",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Document })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: DocumentCreateInput): Promise<Document> {
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
        createdAt: true,
        documentType: true,
        expiringAt: true,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Document",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Document] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(DocumentFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Document[]> {
    const args = plainToClass(DocumentFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        documentType: true,
        expiringAt: true,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Document",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Document })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: DocumentWhereUniqueInput
  ): Promise<Document | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        documentType: true,
        expiringAt: true,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Document",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Document })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: DocumentWhereUniqueInput,
    @common.Body() data: DocumentUpdateInput
  ): Promise<Document | null> {
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
          createdAt: true,
          documentType: true,
          expiringAt: true,
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
    resource: "Document",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Document })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: DocumentWhereUniqueInput
  ): Promise<Document | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          documentType: true,
          expiringAt: true,
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
    @common.Param() params: DocumentWhereUniqueInput
  ): Promise<Account[]> {
    const query = plainToClass(AccountFindManyArgs, request.query);
    const results = await this.service.findAccounts(params.id, {
      ...query,
      select: {
        accountNumber: true,
        accountType: true,
        availableBalance: true,
        balance: true,
        createdAt: true,
        currency: true,
        description: true,

        document: {
          select: {
            id: true,
          },
        },

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
    resource: "Document",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/accounts")
  async connectAccounts(
    @common.Param() params: DocumentWhereUniqueInput,
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
    resource: "Document",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/accounts")
  async updateAccounts(
    @common.Param() params: DocumentWhereUniqueInput,
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
    resource: "Document",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/accounts")
  async disconnectAccounts(
    @common.Param() params: DocumentWhereUniqueInput,
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
}
