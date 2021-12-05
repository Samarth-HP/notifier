import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CdacResponse } from './constants';
import { SendDto } from './send.dto';
import got, { Options } from 'got';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello(): string {
    return 'Hello World!';
  }

  parseSMSResponse = (response: string): CdacResponse => {
    // console.log(response);
    let s;
    // Case for error => 'ERROR : 406 Invalid mobile number\r\n'
    try {
      s = response.split(':');
      return {
        responseCode: parseInt(s[1].trim().split(' ')[0]),
        messageID: undefined,
      };
    } catch (e) {}

    // Case for normal response => '402,MsgID = 070820191565174573847hpgovt-hpssa\r\n'
    s = response.split(',');
    try {
      const messageID = s[1].split('=')[1].trim();
      return {
        responseCode: parseInt(s[0]),
        messageID: messageID,
      };
    } catch (e) {
      return {
        responseCode: parseInt(s[0]),
        messageID: undefined,
      };
    }
  };

  sendSingleSMS = async (d: {
    sendDto: SendDto;
    message: string;
    meta: any;
  }): Promise<CdacResponse> => {
    const url = `${this.configService.get(
      'CDAC_SERVICE_URL',
    )}/api/send_unicode_sms`;

    const res = await got.get(url, {
      searchParams: {
        message: d.message,
        mobileNumber: d.sendDto.phone,
        templateid: d.meta.cdacId,
      },
    });

    if (res.statusCode >= 200 && res.statusCode <= 299) {
      return this.parseSMSResponse(res.body as string);
    } else {
      return {
        messageID: '',
        responseCode: 498,
      };
    }
  };
}
