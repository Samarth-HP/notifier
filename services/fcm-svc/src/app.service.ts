import { Injectable } from '@nestjs/common';
var serviceAccount = require('./serviceAccountKey.json');
import * as admin from 'firebase-admin';

// Initialize Firebase

@Injectable()
export class AppService {
  registrationToken = 'fcm-token-goes-here';
  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  send(): Promise<any> {
    const message = {
      data: {
        score: '850',
        time: '2:45',
      },
      token: registrationToken,
    };
    return admin
      .messaging()
      .sendToDevice(this.registrationToken, message, null)
      .then((response) => {
        console.log({ response });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
