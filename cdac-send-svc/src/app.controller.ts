import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'send' })
  async send(data: any): Promise<string> {
    console.log(
      `Trying to send message with the followin data = ${JSON.stringify(data)}`,
    );
    return 'sent';
  }

  @MessagePattern('send')
  getNotifications(@Payload() data: number[], @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    channel.ack(originalMsg);
  }
}
