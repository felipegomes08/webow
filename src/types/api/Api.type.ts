import { AxiosRequestConfig } from 'axios';

export interface APIResponse {
  data?: any;
  success: boolean;
  error?: any;
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
