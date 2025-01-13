import { deleteApi, getApi, postApi, putApi } from 'services/apiService';
import { APIResponse } from 'types/api/Api.type';
import {
  UserPostRequest,
  UserPutRequest,
  UserResponse,
  UsersGetRequest
} from '../types/UserApi.type';

export const createUser = async (user: UserPostRequest) => {
  const response: APIResponse = await postApi({ url: '/users', data: user });

  return response;
};

export const getUser = async (id: string) => {
  const response: APIResponse<UserResponse> = await getApi({
    url: `/users/${id}`
  });

  return response;
};

export const getUsers = async ({
  page,
  limit,
  id,
  cpf,
  email,
  pixKey,
  userType,
  accountType,
  status,
  affiliateCode,
  createdAt,
  balance
}: UsersGetRequest) => {
  const queryParams = new URLSearchParams();

  if (page) queryParams.append('page', page.toString());
  if (limit) queryParams.append('limit', limit.toString());
  if (id) queryParams.append('id', id);
  if (cpf) queryParams.append('cpf', cpf);
  if (email) queryParams.append('email', email);
  if (pixKey) queryParams.append('pixKey', pixKey);
  if (userType) queryParams.append('userType', userType);
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

  const response: APIResponse = await getApi({ url: `/users?${queryParams}` });

  return response;
};

export const updateUser = async (id: string, user: UserPutRequest) => {
  const response: APIResponse = await putApi({
    url: `/users/${id}`,
    data: user
  });

  return response;
};

export const deleteUser = async (id: string) => {
  const response: APIResponse = await deleteApi({ url: `/users/${id}` });

  return response;
};
