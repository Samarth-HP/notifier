import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { SendDto } from './send.dto';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'send' })
  async send(data: SendDto): Promise<string> {
    console.log(
      `Trying to send message with the following data = ${JSON.stringify(
        data,
      )}`,
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
