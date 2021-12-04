import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  parseSMSResponse = (response) => {
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

  sendSingleSMS = async (params) => {
    const url = `https://localhost`;
    return fetch(url + query, {
      method: 'POST',
      timeout: 15000,
    })
      .then((r) => {
        // console.log('Request finished for: ');
        let text = r.text();
        return text;
      })
      .catch((e) => {
        console.log(e);
        return '498, ';
      });
  };
}
