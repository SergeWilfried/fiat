import { DynamicModule, Module } from '@nestjs/common';
import { CacheService } from './cache.service';
import { Config } from './config';
import { CONFIG_OPTIONS } from './const';

@Module({
  imports: [],
  controllers: [],
  providers: [CacheService],
  exports: [CacheService],
})
export class CacheModule {
  static register(config: Config): DynamicModule {
    return {
      module: CacheModule,
      providers: [
        {
          provide: CONFIG_OPTIONS,
          useValue: config,
        },
        CacheService,
      ],
      global: config?.additionalOptions?.isGlobal || false,
      exports: [CacheService],
    };
  }
}
