export enum ResponseType {
  ERROR,
  SUCCESS,
}

export enum OnNext {
  RETRY_IMMEDIATELY,
  RETRY_WITH_DELAY,
  RETRY_WITH_DELAY_AND_STOP_OTHERS,
  NEXT,
  SCHEDULE,
  ESCALATE,
  DROP_AND_NOTIFY,
}

export interface CdacResponse {
  responseCode: number;
  messageID: string;
}

// prettier-ignore
export const smsResponses = {
  401: {"onNext":[OnNext.NEXT], "details": 'Credentials Error, may be invalid username or password', type: ResponseType.SUCCESS},
  402: {"onNext":[OnNext.NEXT], "details": 'X X messages submitted successfully', type: ResponseType.SUCCESS},
  403: {"onNext":[OnNext.ESCALATE, OnNext.SCHEDULE], "details": 'Credits not available', type: ResponseType.ERROR},
  404: {"onNext":[OnNext.RETRY_WITH_DELAY_AND_STOP_OTHERS], "details": 'Internal Database Error', type: ResponseType.ERROR},
  405: {"onNext":[OnNext.RETRY_WITH_DELAY_AND_STOP_OTHERS], "details": 'Internal Networking Error', type: ResponseType.ERROR},
  406: {"onNext":[OnNext.DROP_AND_NOTIFY], "details": 'Invalid or Duplicate numbers', type: ResponseType.ERROR},
  407: {"onNext":[OnNext.RETRY_WITH_DELAY_AND_STOP_OTHERS], "details": 'Network Error on SMSC', type: ResponseType.ERROR},
  408: {"onNext":[OnNext.RETRY_WITH_DELAY_AND_STOP_OTHERS], "details": 'Network Error on SMSC', type: ResponseType.ERROR},
  409: {"onNext":[OnNext.RETRY_WITH_DELAY_AND_STOP_OTHERS], "details": 'SMSC response timed out, message will be submitted', type: ResponseType.ERROR},
  410: {"onNext":[OnNext.ESCALATE], "details": 'Internal Limit Exceeded, Contact support', type: ResponseType.ERROR},
  411: {"onNext":[OnNext.ESCALATE], "details": 'Sender ID not approved', type: ResponseType.ERROR},
  412: {"onNext":[OnNext.ESCALATE], "details": 'Sender ID not approved', type: ResponseType.ERROR},
  413: {"onNext":[OnNext.ESCALATE], "details": 'Suspect Spam, we do not accept these messages.', type: ResponseType.ERROR},
  414: {"onNext":[OnNext.DROP_AND_NOTIFY], "details": 'Rejected by various reasons by the operator such as DND, SPAM etc', type: ResponseType.ERROR},
  415: {"onNext":[OnNext.ESCALATE], "details": 'Secure Key not available', type: ResponseType.ERROR},
  416: {"onNext":[OnNext.ESCALATE], "details": 'Hash doesn’t match', type: ResponseType.ERROR},
  418: {"onNext":[OnNext.ESCALATE], "details": 'Daily Limit Exceeded', type: ResponseType.ERROR},
  498: {"onNext":[OnNext.DROP_AND_NOTIFY], "details": 'Message already sent.', type: ResponseType.ERROR},
  499: {"onNext":[OnNext.DROP_AND_NOTIFY], "details": 'User with no phone number', type: ResponseType.ERROR},
};

export const getTackURL = (
  userName: string,
  password: string,
  messageID: string,
): string => {
  return `https://mgov.gov.in/XMLForReportG/reportXMLNew?userid=${userName}&password=${password}&msgid=${messageID}`;
};
