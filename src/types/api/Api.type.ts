import { AxiosRequestConfig } from 'axios';

export interface APIResponse<t = any> {
  data?: t;
  success: boolean;
  error?: any;
  message?: string;
}

export interface GetApiParams {
  url: string;
  config?: AxiosRequestConfig;
}

export interface PostApiParams extends GetApiParams {
  data: any;
}

export interface PutApiParams extends GetApiParams {
  data: any;
}

export interface DeleteApiParams extends GetApiParams {}
