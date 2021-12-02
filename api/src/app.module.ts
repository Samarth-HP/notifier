import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GupshupService } from './gupshup/gupshup.service';
import { Module } from '@nestjs/common';
import { OtpService } from './otp/otp.service';
import { SmsService } from './interfaces/sms.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PrismaService } from './prisma.service';
import { OpenTelemetryModule } from 'nestjs-otel';

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

const OpenTelemetryModuleConfig = OpenTelemetryModule.forRoot({
  metrics: {
    hostMetrics: true, // Includes Host Metrics
    defaultMetrics: true, // Includes Default Metrics
    apiMetrics: {
      enable: true, // Includes api metrics
      timeBuckets: [], // You can change the default time buckets
      defaultLabels: {
        // You can set default labels for api metrics
        custom: 'label',
      },
      ignoreRoutes: ['/favicon.ico'], // You can ignore specific routes (See https://docs.nestjs.com/middleware#excluding-routes for options)
      ignoreUndefinedRoutes: false, //Records metrics for all URLs, even undefined ones
    },
  },
});

@Module({
  imports: [
    OpenTelemetryModule,
    ConfigModule.forRoot(),
    ClientsModule.registerAsync([
      {
        name: 'CDAC_SERVICE',
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [configService.get<string>('BROKER_URL')],
            queue: configService.get<string>('CDAC_SEND_QUEUE'),
            queueOptions: {
              durable: true,
            },
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [AppController],
  providers: [otpServiceFactory, SmsService, AppService, PrismaService],
})
export class AppModule {}
