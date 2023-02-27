import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CacheModule } from './cache.module';
import { CacheService } from './cache.service';

describe('CacheService', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        CacheModule.register({
          createClientConfiguration: {
            socket: {
              port: 63790,
            },
          },
        }),
      ],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  describe('when application is running', () => {
    it('should have redis client ready', () => {
      const redisClientService: CacheService = app.get(CacheService, {
        strict: false,
      });
      expect(redisClientService.client.isOpen).toEqual(true);
      expect(redisClientService.client.isReady).toEqual(true);
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
