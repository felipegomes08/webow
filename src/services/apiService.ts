import { AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  APIResponse,
  DeleteApiParams,
  PostApiParams,
  PutApiParams
} from 'types/api/Api.type';
import api from './api';

interface GetApiParams {
  url: string;
  config?: AxiosRequestConfig;
}

export const getApi = async ({
  url,
  config
}: GetApiParams): Promise<APIResponse> => {
  try {
    const response: AxiosResponse = await api.get(url, config);
    return response.data;
  } catch (error) {
    return { success: false, data: undefined, error: error };
  }
};

export const postApi = async ({
  url,
  data,
  config
}: PostApiParams): Promise<APIResponse> => {
  try {
    const response: AxiosResponse = await api.post(url, data, config);
    return response.data;
  } catch (error) {
    return { success: false, data: undefined, error: error };
  }
};

export const putApi = async ({
  url,
  data,
  config
}: PutApiParams): Promise<APIResponse> => {
  try {
    const response: AxiosResponse = await api.put(url, data, config);
    return response.data;
  } catch (error) {
    return { success: false, data: undefined, error: error };
  }
};

export const deleteApi = async ({
  url,
  config
}: DeleteApiParams): Promise<APIResponse> => {
  try {
    const response: AxiosResponse = await api.delete(url, config);
    return response.data;
  } catch (error) {
    return { success: false, data: undefined, error: error };
  }
};
