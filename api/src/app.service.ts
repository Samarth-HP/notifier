import { Injectable } from '@nestjs/common';
import { Span } from 'nestjs-otel';
import {
  Sms,
  Prisma,
  TextType,
  ProviderName,
} from '../prisma/generated/client';

import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  @Span('CRITICAL_SECTION')
  async getAllSmses(): Promise<Sms[]> {
    await this.createSms({
      phone: '9415787824',
      user: 'a9b4a475-0828-452d-bc1e-ea43a40eeaad',
      org: 'a9b4a475-0828-452d-bc1e-ea43a40eeaad',
      text: `Hi Chakshu ${Math.random() * 10000}`,
      type: TextType.ENGLISH,
      provider: { connect: { id: 1 } },
    });
    return this.prisma.sms.findMany();
  }

  async createSms(data: Prisma.SmsCreateInput): Promise<Sms> {
    return this.prisma.sms.create({
      data,
    });
  }
}
