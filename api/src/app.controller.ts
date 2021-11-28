import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ProviderName, Sms, Status } from 'prisma/generated/client';
import { AppService } from './app.service';
import { SMSResponse } from './interfaces/sms.interface';
import { SmsService } from './interfaces/sms.service';
import { OtpService } from './otp/otp.service';
import { SendDto } from './send.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    private readonly otpService: OtpService,
    private readonly smsService: SmsService,
    private readonly appService: AppService,
    @Inject('CDAC_SERVICE') private cdacSendClient: ClientProxy,
  ) {}

  @Get('/sendOTP')
  async sendOTP(@Query('phone') phone): Promise<any> {
    const status: SMSResponse = await this.otpService.sendOTP(phone);
    return { status };
  }

  @Get('/verifyOTP')
  async verifyOTP(@Query('phone') phone, @Query('otp') otp): Promise<any> {
    const status: SMSResponse = await this.otpService.verifyOTP({ phone, otp });
    return { status };
  }

  @Post('/send')
  async send(@Body() sendDto: SendDto): Promise<any> {
    let status: Status;
    let message: string;
    if (sendDto.provider === ProviderName.CDAC) {
      const pattern = { cmd: 'send' };
      const payload = sendDto;
      this.cdacSendClient
        .send<SendDto>(pattern, payload)
        .subscribe((x) => console.log(x));
    } else if (sendDto.provider === ProviderName.GUPSHUP) {
      console.log('Send this to Gupshup Service');
    } else {
      status = Status.FAILED;
      message = 'Provider not suported';
      console.error(message);
    }
    return { status, message };
  }

  @Get('/allSms')
  async getAllSmses(): Promise<any> {
    const all: Sms[] = await this.appService.getAllSmses();

    return JSON.stringify(all, (key, value) =>
      typeof value === 'bigint' ? Number(value) : value,
    );
  }
}
