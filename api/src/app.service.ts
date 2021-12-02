import {
  Prisma,
  ProviderName,
  Sms,
  TextType,
} from '../prisma/generated/client';

import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Span } from 'nestjs-otel';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  @Span('CRITICAL_SECTION')
  async getAllSmses(): Promise<Sms[]> {
    // await this.createSms({
    //   phone: '9415787824',
    //   user: 'a9b4a475-0828-452d-bc1e-ea43a40eeaad',
    //   org: 'a9b4a475-0828-452d-bc1e-ea43a40eeaad',
    //   text: `Hi Chakshu ${Math.random() * 10000}`,
    //   type: TextType.ENGLISH,
    //   provider: { connect: { id: 1 } },
    // });
    return this.prisma.sms.findMany();
  }

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
