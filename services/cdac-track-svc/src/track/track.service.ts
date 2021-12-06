import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import got, { Options } from 'got';
import { Sms } from 'prisma/generated/client';
import { TrackStatus } from './track.constants';
import convert from 'xml-js';

@Injectable()
export class TrackService {
  constructor(private configService: ConfigService) {}

  parseStatusFromXMl = (data) => {
    if (data == null) return TrackStatus.PARSE_ERROR;
    if (parseInt(data.dept.delvSMSCount._text) > 0) return TrackStatus.SUCCESS;
    else if (parseInt(data.dept.fldSMSCount._text) > 0) return TrackStatus.FAIL;
    else if (parseInt(data.dept.subSMSCount._text) > 0) {
      let obj = data.dept.fld;
      if (!(Object.entries(obj).length === 0 && obj.constructor === Object))
        return TrackStatus.FAIL;
      else return TrackStatus.SUBMITTED;
    } else return TrackStatus.UNKNOWN;
  };

  async track(sms: Sms) {
    const url: string = this.configService.get('CDAC_TRACK_URL');
    const searchParams: URLSearchParams = new URLSearchParams([
      ['userid', this.configService.get<string>('CDAC_USERNAME')],
      ['password', this.configService.get<string>('CDAC_PASSWORD')],
      ['msgid', sms.providerMessageId],
    ]);

    await got
      .get(url, {
        searchParams,
      })
      .text()
      .then((text) => convert.xml2json(text))
      .then((jsonResponse) => this.parseStatusFromXMl(jsonResponse))
      .catch((error) => {});
  }
}
