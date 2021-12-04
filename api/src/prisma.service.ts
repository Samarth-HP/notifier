import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';

import { PrismaClient } from '../../db/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    console.log('Prisma connected');
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
