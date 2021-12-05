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
    return this.prisma.sms.findMany();
  }

  async createSms(data: Prisma.SmsCreateInput): Promise<Sms> {
    return this.prisma.sms.create({
      data,
    });
  }
}
