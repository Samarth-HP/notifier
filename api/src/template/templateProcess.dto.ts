export interface RenderDto {
  id: number;
  data: any;
}

export interface RenderResponse {
  processed: string;
  templateType: string;
  data: any;
  template: string;
  meta?: any;
}

export interface ErrorRenderResponse {
  message: string;
}

export function isErrorRenderResponse(
  object: any,
): object is ErrorRenderResponse {
  return 'message' in object;
}
