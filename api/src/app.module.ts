import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GupshupService } from './gupshup/gupshup.service';
import { Module } from '@nestjs/common';
import { OtpService } from './otp/otp.service';
import { SmsService } from './interfaces/sms.service';

const gupshupFactory = {
  provide: 'OtpService',
  useFactory: () => {
    return new GupshupService(
      process.env.GUPSHUP_USERNAME,
      process.env.GUPSHUP_PASSWORD,
      process.env.GUPSHUP_BASEURL,
    );
  },
  inject: [],
};

const otpServiceFactory = {
  provide: OtpService,
  useFactory: () => {
    return new OtpService(gupshupFactory.useFactory());
  },
  inject: [],
};

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [otpServiceFactory, SmsService],
})
export class AppModule {}
