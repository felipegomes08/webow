import { APIResponse } from 'types/api/Api.type';
import {
  TransactionGridRequest,
  TransactionPostBodyRequest,
  TransactionPostPathRequest,
  TransactionPutRequest
} from 'types/transaction';
import { getApi, postApi, putApi } from './apiService';

export const getTransaction = async (id: string) => {
  const response: APIResponse = await getApi({
    url: `/transaction/${id}`
  });

  return response;
};

export const getTransactions = async ({
  amountGt,
  amountGte,
  amountLt,
  amountLte,
  createdAtGt,
  createdAtGte,
  createdAtLt,
  createdAtLte,
  userAccountType,
  userAffiliateCode,
  userCpf,
  userEmail,
  userId,
  userPixKey,
  userStatus,
  userUserType,
  id,
  limit,
  page,
  pixKey,
  status,
  type
}: TransactionGridRequest) => {
  const queryParams = new URLSearchParams();

  if (amountGt) queryParams.append('amount.gt', amountGt.toString());
  if (amountGte) queryParams.append('amount.gte', amountGte.toString());
  if (amountLt) queryParams.append('amount.lt', amountLt.toString());
  if (amountLte) queryParams.append('amount.lte', amountLte.toString());
  if (createdAtGt) queryParams.append('createdAt.gt', createdAtGt.toString());
  if (createdAtGte)
    queryParams.append('createdAt.gte', createdAtGte.toString());
  if (createdAtLt) queryParams.append('createdAt.lt', createdAtLt.toString());
  if (createdAtLte)
    queryParams.append('createdAt.lte', createdAtLte.toString());
  if (userAccountType)
    queryParams.append('user.accountType', userAccountType.toString());
  if (userAffiliateCode)
    queryParams.append('user.affiliateCode', userAffiliateCode.toString());
  if (userCpf) queryParams.append('user.cpf', userCpf.toString());
  if (userEmail) queryParams.append('user.email', userEmail.toString());
  if (userId) queryParams.append('user.id', userId.toString());
  if (userPixKey) queryParams.append('user.pixKey', userPixKey.toString());
  if (userStatus) queryParams.append('user.status', userStatus.toString());
  if (userUserType)
    queryParams.append('user.userType', userUserType.toString());
  if (id) queryParams.append('id', id.toString());
  if (limit) queryParams.append('limit', limit.toString());
  if (page) queryParams.append('page', page.toString());
  if (pixKey) queryParams.append('pixKey', pixKey.toString());
  if (status) queryParams.append('status', status.toString());
  if (type) queryParams.append('type', type.toString());

  const response: APIResponse = await getApi({
    url: `/transaction?${queryParams}`
  });
  return response.data;
};

export const createTransaction = async (
  { type }: TransactionPostPathRequest,
  { amount, userId }: TransactionPostBodyRequest
) => {
  const response: APIResponse = await postApi({
    url: `/transaction/${type}`,
    data: { amount, userId }
  });

  return response;
};

export const updateTransaction = async (
  id: string,
  transaction: TransactionPutRequest
) => {
  const response: APIResponse = await putApi({
    url: `/transaction/${id}`,
    data: transaction
  });

  return response;
};
