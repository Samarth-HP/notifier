import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { AppService } from './app.service';
import { CdacResponse } from './constants';
import { SendDto } from './send.dto';

@Controller()
export class AppController {
  constructor(private readonly service: AppService) {}

  @MessagePattern({ cmd: 'send' })
  async send(data: { sendDto: SendDto; message: string; meta: any }) {
    const res: CdacResponse = await this.service.sendSingleSMS(data);
    // Persist data to SMS table
    // Send this to track
  }

  @MessagePattern('send')
  getNotifications(@Payload() data: number[], @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    channel.ack(originalMsg);
  }
}
