import { CacheModule, Module, Scope } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MorganInterceptor, MorganModule } from 'nest-morgan';
import { UserModule } from './user/user.module';
import { TransactionModule } from './transaction/transaction.module';
import { AddressModule } from './address/address.module';
import { AccountModule } from './account/account.module';
import { DocumentModule } from './document/document.module';
import { ACLModule } from './auth/acl.module';
import { AuthModule } from './auth/auth.module';
import { HealthModule } from './health/health.module';
import { PrismaModule } from './prisma/prisma.module';
import { SecretsManagerModule } from './providers/secrets/secretsManager.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ServeStaticOptionsService } from './serveStaticOptions.service';
import { GraphQLModule } from '@nestjs/graphql';
import { redisStore } from 'cache-manager-redis-store';

@Module({
  controllers: [],
  imports: [
    UserModule,
    TransactionModule,
    AddressModule,
    AccountModule,
    DocumentModule,
    ACLModule,
    AuthModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    CacheModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        ttl: configService.get('CACHE_TTL'),
        host: configService.get('CACHE_HOST'),
        isGlobal: true,
        port: configService.get('CACHE_PORT'),
      }),
      inject: [ConfigService],
    }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: configService => {
        const playground = configService.get('GRAPHQL_PLAYGROUND');
        const introspection = configService.get('GRAPHQL_INTROSPECTION');
        return {
          autoSchemaFile: 'schema.graphql',
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor('combined'),
    },
  ],
})
export class AppModule {}
