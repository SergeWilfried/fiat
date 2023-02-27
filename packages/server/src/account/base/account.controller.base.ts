/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from '@nestjs/common';
import * as swagger from '@nestjs/swagger';
import { isRecordNotFoundError } from '../../prisma.util';
import * as errors from '../../errors';
import { Request } from 'express';
import { plainToClass } from 'class-transformer';
import { ApiNestedQuery } from '../../decorators/api-nested-query.decorator';
import * as nestAccessControl from 'nest-access-control';
import * as defaultAuthGuard from '../../auth/defaultAuth.guard';
import { AccountService } from '../account.service';
import { AclValidateRequestInterceptor } from '../../interceptors/aclValidateRequest.interceptor';
import { AclFilterResponseInterceptor } from '../../interceptors/aclFilterResponse.interceptor';
import { AccountCreateInput } from './AccountCreateInput';
import { AccountWhereInput } from './AccountWhereInput';
import { AccountWhereUniqueInput } from './AccountWhereUniqueInput';
import { AccountFindManyArgs } from './AccountFindManyArgs';
import { AccountUpdateInput } from './AccountUpdateInput';
import { Account } from './Account';

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AccountControllerBase {
  constructor(
    protected readonly service: AccountService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Account })
  @nestAccessControl.UseRoles({
    resource: 'Account',
    action: 'create',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: AccountCreateInput): Promise<Account> {
    return await this.service.create({
      data: {
        ...data,

        customers: {
          connect: data.customers,
        },

        document: {
          connect: data.document,
        },
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Account] })
  @ApiNestedQuery(AccountFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: 'Account',
    action: 'read',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Account[]> {
    const args = plainToClass(AccountFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get('/:id')
  @swagger.ApiOkResponse({ type: Account })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'Account',
    action: 'read',
    possession: 'own',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: AccountWhereUniqueInput,
  ): Promise<Account | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`,
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch('/:id')
  @swagger.ApiOkResponse({ type: Account })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'Account',
    action: 'update',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: AccountWhereUniqueInput,
    @common.Body() data: AccountUpdateInput,
  ): Promise<Account | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          customers: {
            connect: data.customers,
          },

          document: {
            connect: data.document,
          },
        },
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`,
        );
      }
      throw error;
    }
  }

  @common.Delete('/:id')
  @swagger.ApiOkResponse({ type: Account })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'Account',
    action: 'delete',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: AccountWhereUniqueInput,
  ): Promise<Account | null> {
    try {
      return await this.service.delete({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`,
        );
      }
      throw error;
    }
  }
}
