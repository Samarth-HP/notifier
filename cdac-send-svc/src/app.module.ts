import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'CDAC_SERVICE',
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
  ],
})
export class AppModule {}
