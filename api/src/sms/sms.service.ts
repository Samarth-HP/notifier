import { Injectable } from '@nestjs/common';
import { Sms } from '@prisma/client';
import { Prisma, ProviderName } from 'prisma/generated/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SmsService {
  constructor(private prisma: PrismaService) {}

  async createSms(data: Prisma.SmsCreateInput): Promise<Sms> {
    return this.prisma.sms.create({
      data,
    });
  }

  async createProvider() {
    await this.prisma.provider.create({
      data: {
        channel: 'SMS',
        providerName: ProviderName.GUPSHUP,
        config: {},
        unitCost: 0.1,
        id: 1,
      },
    });
  }
}
