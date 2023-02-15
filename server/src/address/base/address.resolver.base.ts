/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from '@nestjs/common';
import * as graphql from '@nestjs/graphql';
import * as apollo from 'apollo-server-express';
import * as nestAccessControl from 'nest-access-control';
import { GqlDefaultAuthGuard } from '../../auth/gqlDefaultAuth.guard';
import * as gqlACGuard from '../../auth/gqlAC.guard';
import { isRecordNotFoundError } from '../../prisma.util';
import { MetaQueryPayload } from '../../util/MetaQueryPayload';
import { AclFilterResponseInterceptor } from '../../interceptors/aclFilterResponse.interceptor';
import { AclValidateRequestInterceptor } from '../../interceptors/aclValidateRequest.interceptor';
import { CreateAddressArgs } from './CreateAddressArgs';
import { UpdateAddressArgs } from './UpdateAddressArgs';
import { DeleteAddressArgs } from './DeleteAddressArgs';
import { AddressFindManyArgs } from './AddressFindManyArgs';
import { AddressFindUniqueArgs } from './AddressFindUniqueArgs';
import { Address } from './Address';
import { AddressService } from '../address.service';

@graphql.Resolver(() => Address)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AddressResolverBase {
  constructor(
    protected readonly service: AddressService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: 'Address',
    action: 'read',
    possession: 'any',
  })
  async _addressesMeta(
    @graphql.Args() args: AddressFindManyArgs,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Address])
  @nestAccessControl.UseRoles({
    resource: 'Address',
    action: 'read',
    possession: 'any',
  })
  async addresses(
    @graphql.Args() args: AddressFindManyArgs,
  ): Promise<Address[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Address, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: 'Address',
    action: 'read',
    possession: 'own',
  })
  async address(
    @graphql.Args() args: AddressFindUniqueArgs,
  ): Promise<Address | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Address)
  @nestAccessControl.UseRoles({
    resource: 'Address',
    action: 'create',
    possession: 'any',
  })
  async createAddress(
    @graphql.Args() args: CreateAddressArgs,
  ): Promise<Address> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Address)
  @nestAccessControl.UseRoles({
    resource: 'Address',
    action: 'update',
    possession: 'any',
  })
  async updateAddress(
    @graphql.Args() args: UpdateAddressArgs,
  ): Promise<Address | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`,
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Address)
  @nestAccessControl.UseRoles({
    resource: 'Address',
    action: 'delete',
    possession: 'any',
  })
  async deleteAddress(
    @graphql.Args() args: DeleteAddressArgs,
  ): Promise<Address | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`,
        );
      }
      throw error;
    }
  }
}
