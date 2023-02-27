import * as common from '@nestjs/common';
import * as graphql from '@nestjs/graphql';
import * as nestAccessControl from 'nest-access-control';
import { GqlDefaultAuthGuard } from '../auth/gqlDefaultAuth.guard';
import * as gqlACGuard from '../auth/gqlAC.guard';
import { BankResolverBase } from './base/bank.resolver.base';
import { Bank } from './base/Bank';
import { BankService } from './bank.service';

@graphql.Resolver(() => Bank)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class BankResolver extends BankResolverBase {
  constructor(
    protected readonly service: BankService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
  ) {
    super(service, rolesBuilder);
  }
}
