import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ErrorRenderResponse,
  RenderDto,
  RenderResponse,
} from './templateProcess.dto';
import got, { CancelableRequest, Response } from 'got';

@Injectable()
export class TemplateService {
  constructor(private configService: ConfigService) {}

  process = async (
    data: RenderDto,
  ): Promise<RenderResponse | ErrorRenderResponse> => {
    const res: Response = await got.post(
      `${this.configService.get('TEMPLATE_SERVICE_BASE_URL')}/process`,
      {
        json: data,
      },
    );
    if (res.statusCode >= 200 && res.statusCode <= 299) {
      return JSON.parse(res.body as string) as RenderResponse;
    } else {
      return { message: 'Unable to get template' } as ErrorRenderResponse;
    }
  };
}
