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
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CustomerService } from "../customer.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CustomerCreateInput } from "./CustomerCreateInput";
import { CustomerWhereInput } from "./CustomerWhereInput";
import { CustomerWhereUniqueInput } from "./CustomerWhereUniqueInput";
import { CustomerFindManyArgs } from "./CustomerFindManyArgs";
import { CustomerUpdateInput } from "./CustomerUpdateInput";
import { Customer } from "./Customer";
import { AccountFindManyArgs } from "../../account/base/AccountFindManyArgs";
import { Account } from "../../account/base/Account";
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";
import { DocumentFindManyArgs } from "../../document/base/DocumentFindManyArgs";
import { Document } from "../../document/base/Document";
import { DocumentWhereUniqueInput } from "../../document/base/DocumentWhereUniqueInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CustomerControllerBase {
  constructor(
    protected readonly service: CustomerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Customer })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: CustomerCreateInput): Promise<Customer> {
    return await this.service.create({
      data: {
        ...data,

        address: data.address
          ? {
              connect: data.address,
            }
          : undefined,
      },
      select: {
        address: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        dob: true,
        email: true,
        firstname: true,
        id: true,
        lastname: true,
        phone: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Customer] })
  @ApiNestedQuery(CustomerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Customer[]> {
    const args = plainToClass(CustomerFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        address: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        dob: true,
        email: true,
        firstname: true,
        id: true,
        lastname: true,
        phone: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Customer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<Customer | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        address: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        dob: true,
        email: true,
        firstname: true,
        id: true,
        lastname: true,
        phone: true,
        status: true,
        updatedAt: true,
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
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Customer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() data: CustomerUpdateInput
  ): Promise<Customer | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          address: data.address
            ? {
                connect: data.address,
              }
            : undefined,
        },
        select: {
          address: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          dob: true,
          email: true,
          firstname: true,
          id: true,
          lastname: true,
          phone: true,
          status: true,
          updatedAt: true,
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

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Customer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<Customer | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          address: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          dob: true,
          email: true,
          firstname: true,
          id: true,
          lastname: true,
          phone: true,
          status: true,
          updatedAt: true,
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
  @common.Get("/:id/Account")
  @ApiNestedQuery(AccountFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async findManyAccount(
    @common.Req() request: Request,
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<Account[]> {
    const query = plainToClass(AccountFindManyArgs, request.query);
    const results = await this.service.findAccount(params.id, {
      ...query,
      select: {
        accountNumber: true,
        accountType: true,
        availableBalance: true,
        balance: true,
        createdAt: true,
        currency: true,

        customers: {
          select: {
            id: true,
          },
        },

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
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/Account")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async connectAccount(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: AccountWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Account: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/Account")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async updateAccount(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: AccountWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Account: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/Account")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async disconnectAccount(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: AccountWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Account: {
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
  @common.Get("/:id/documents")
  @ApiNestedQuery(DocumentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Document",
    action: "read",
    possession: "any",
  })
  async findManyDocuments(
    @common.Req() request: Request,
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<Document[]> {
    const query = plainToClass(DocumentFindManyArgs, request.query);
    const results = await this.service.findDocuments(params.id, {
      ...query,
      select: {
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        documentType: true,
        expiringAt: true,
        id: true,
        image: true,
        status: true,
        tags: true,
        updatedAt: true,
        url: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/documents")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async connectDocuments(
    @common.Param() params: CustomerWhereUniqueInput,
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

  @common.Patch("/:id/documents")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async updateDocuments(
    @common.Param() params: CustomerWhereUniqueInput,
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

  @common.Delete("/:id/documents")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async disconnectDocuments(
    @common.Param() params: CustomerWhereUniqueInput,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/enitities")
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async findManyEnitities(
    @common.Req() request: Request,
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findEnitities(params.id, {
      ...query,
      select: {
        address: true,
        businessName: true,
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        legalTermVersions: true,
        messages: true,
        password2: true,
        phoe: true,
        privacyPolicy: true,
        roles: true,
        status: true,
        termsAndConditions: true,
        updatedAt: true,
        username: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/enitities")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async connectEnitities(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      enitities: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/enitities")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async updateEnitities(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      enitities: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/enitities")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async disconnectEnitities(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      enitities: {
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