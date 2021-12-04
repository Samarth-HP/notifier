import { PrismaService } from './prisma.service';
import { ProviderName } from '../../db/client';

export class SendDto {
  user: string;
  templateId: number;
  provider: ProviderName;
  data: any;
}
