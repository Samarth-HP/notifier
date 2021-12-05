import { Controller, Inject } from '@nestjs/common';
import {
  ClientProxy,
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { Sms, Status } from 'prisma/generated/client';
import { AppService } from './app.service';
import { CdacResponse, smsResponses } from './constants';
import { PrismaService } from './prisma.service';
import { SendDto } from './send.dto';

@Controller()
export class AppController {
  constructor(
    private readonly service: AppService,
    private readonly prisma: PrismaService,
    @Inject('CDAC_TRACK_SERVICE') private cdacSendClient: ClientProxy,
  ) {}

  @MessagePattern({ cmd: 'send' })
  async send(data: { sendDto: SendDto; message: string; meta: any; sms: Sms }) {
    const res: CdacResponse = await this.service.sendSingleSMS(data);

    // Persist data to SMS table
    const updatedSms: Sms = await this.prisma.sms.update({
      where: {
        id: data.sms.id,
      },
      data: {
        status: Status.QUEUED,
        providerMessageId: res.messageID,
      },
    });

    // Send this to track
    const pattern = { cmd: 'track' };
    this.cdacSendClient
      .send<SendDto>(pattern, {
        sms: updatedSms,
      })
      .subscribe((x) => console.log(x));
  }

  @MessagePattern('send')
  getNotifications(@Payload() data: number[], @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    channel.ack(originalMsg);
  }
}
