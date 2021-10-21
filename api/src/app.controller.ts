import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { SMSResponse } from './interfaces/sms.interface';
import { SmsService } from './interfaces/sms.service';
import { OtpService } from './otp/otp.service';

@Controller()
export class AppController {
  constructor(
    private readonly otpService: OtpService,
    private readonly smsService: SmsService,
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
}
