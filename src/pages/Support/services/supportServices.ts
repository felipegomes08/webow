import { deleteApi, getApi, postApi, putApi } from 'services/apiService';
import { APIResponse } from 'types/api/Api.type';
import {
  MessagePostRequest,
  MessagePutRequest,
  MessageResponse,
  MessagesGetRequest
} from '../types/SupportApi.type';

export const createMessage = async (message: MessagePostRequest) => {
  const response: APIResponse = await postApi({
    url: '/messages',
    data: message
  });

  return response;
};

export const getMessage = async (id: string) => {
  const response: APIResponse<MessageResponse> = await getApi({
    url: `/messages/${id}`
  });

  return response;
};

export const getMessages = async ({
  page,
  limit,
  id,
  cpf,
  email,
  pixKey,
  accountType,
  status,
  affiliateCode,
  createdAt,
  balance
}: MessagesGetRequest) => {
  const queryParams = new URLSearchParams();

  if (page) queryParams.append('page', page.toString());
  if (limit) queryParams.append('limit', limit.toString());
  if (id) queryParams.append('id', id);
  if (cpf) queryParams.append('cpf', cpf);
  if (email) queryParams.append('email', email);
  if (pixKey) queryParams.append('pixKey', pixKey);
  if (accountType) queryParams.append('accountType', accountType);
  if (status) queryParams.append('status', status);
  if (affiliateCode) queryParams.append('affiliateCode', affiliateCode);

  if (createdAt) {
    if (createdAt.lte) queryParams.append('createdAt.lte', createdAt.lte);
    if (createdAt.lt) queryParams.append('createdAt.lt', createdAt.lt);
    if (createdAt.gt) queryParams.append('createdAt.gt', createdAt.gt);
    if (createdAt.gte) queryParams.append('createdAt.gte', createdAt.gte);
  }

  if (balance) {
    if (balance.lte) queryParams.append('balance.lte', balance.lte.toString());
    if (balance.lt) queryParams.append('balance.lt', balance.lt.toString());
    if (balance.gt) queryParams.append('balance.gt', balance.gt.toString());
    if (balance.gte) queryParams.append('balance.gte', balance.gte.toString());
  }

  const response: APIResponse = await getApi({
    url: `/messages?${queryParams}`
  });

  return response;
};

export const updateMessage = async (id: string, message: MessagePutRequest) => {
  const response: APIResponse = await putApi({
    url: `/messages/${id}`,
    data: message
  });

  return response;
};

export const deleteMessage = async (id: string) => {
  const response: APIResponse = await deleteApi({ url: `/messages/${id}` });

  return response;
};
