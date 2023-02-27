import {
  Inject,
  Injectable,
  OnApplicationShutdown,
  OnModuleInit,
} from '@nestjs/common';
import {
  createClient,
  RedisClientType,
  RedisFunctions,
  RedisModules,
  RedisScripts,
} from 'redis';
import { Config } from './config';
import { CONFIG_OPTIONS } from './const';

@Injectable()
export class CacheService implements OnApplicationShutdown, OnModuleInit {
  private _client: RedisClientType<RedisModules, RedisFunctions, RedisScripts>;

  public get client() {
    return this._client;
  }

  private set client(value) {
    this._client = value;
  }

  constructor(@Inject(CONFIG_OPTIONS) private readonly config: Config) {
    this._client = createClient(config.createClientConfiguration);
  }

  async onModuleInit() {
    await this.client.connect();
  }

  async onApplicationShutdown(signal?: string) {
    await this.client.quit();
  }
}
