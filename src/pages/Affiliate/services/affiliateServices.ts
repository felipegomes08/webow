import { deleteApi, getApi, postApi, putApi } from 'services/apiService';
import { APIResponse } from 'types/api/Api.type';
import {
  AffiliatePostRequest,
  AffiliatePutRequest,
  AffiliatesGetRequest
} from '../types/AffiliateApi.type';

export const createAffiliate = async (affiliate: AffiliatePostRequest) => {
  const response: APIResponse = await postApi({
    url: '/affiliates',
    data: affiliate
  });

  return response;
};

export const getAffiliate = async (id: string) => {
  const response: APIResponse = await getApi({ url: `/affiliates/${id}` });

  return response;
};

export const getAffiliates = async ({
  page,
  limit,
  id,
  cpf,
  email,
  pixKey,
  affiliateType,
  accountType,
  status,
  affiliateCode,
  createdAt,
  balance
}: AffiliatesGetRequest) => {
  const queryParams = new URLSearchParams();

  if (page) queryParams.append('page', page.toString());
  if (limit) queryParams.append('limit', limit.toString());
  if (id) queryParams.append('id', id);
  if (cpf) queryParams.append('cpf', cpf);
  if (email) queryParams.append('email', email);
  if (pixKey) queryParams.append('pixKey', pixKey);
  if (affiliateType) queryParams.append('affiliateType', affiliateType);
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
    url: `/affiliates?${queryParams}`
  });

  return response;
};

export const updateAffiliate = async (
  id: string,
  affiliate: AffiliatePutRequest
) => {
  const response: APIResponse = await putApi({
    url: `/affiliates/${id}`,
    data: affiliate
  });

  return response;
};

export const deleteAffiliate = async (id: string) => {
  const response: APIResponse = await deleteApi({ url: `/affiliates/${id}` });

  return response;
};
