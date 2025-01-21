import { deleteApi, getApi, postApi, putApi } from 'services/apiService';
import { APIResponse } from 'types/api/Api.type';
import {
  TicketPostRequest,
  TicketPutRequest,
  TicketResponse,
  TicketsGetRequest
} from '../types/SupportApi.type';

export const createTicket = async ({ userId, subject }: TicketPostRequest) => {
  const response: APIResponse = await postApi({
    url: '/ticket',
    data: { userId, subject }
  });

  return response;
};

export const getTicket = async (id: string) => {
  const response: APIResponse<TicketResponse> = await getApi({
    url: `/ticket/${id}`
  });

  return response;
};

export const getTickets = async ({
  createdAt,
  deleted,
  id,
  limit,
  page,
  subject,
  supportId,
  userId
}: TicketsGetRequest) => {
  const queryParams = new URLSearchParams();

  if (deleted) queryParams.append('deleted', deleted.toString());
  if (id) queryParams.append('id', id.toString());
  if (limit) queryParams.append('limit', limit.toString());
  if (page) queryParams.append('page', page.toString());
  if (subject) queryParams.append('subject', subject.toString());
  if (supportId) queryParams.append('supportId', supportId.toString());
  if (userId) queryParams.append('userId', userId.toString());

  if (createdAt) {
    if (createdAt.lte) queryParams.append('createdAt.lte', createdAt.lte);
    if (createdAt.lt) queryParams.append('createdAt.lt', createdAt.lt);
    if (createdAt.gt) queryParams.append('createdAt.gt', createdAt.gt);
    if (createdAt.gte) queryParams.append('createdAt.gte', createdAt.gte);
  }

  const response: APIResponse = await getApi({
    url: `/ticket?${queryParams}`
  });

  return response;
};

export const updateTicket = async (
  id: string,
  { deleted, subject, supportId, userId }: TicketPutRequest
) => {
  const response: APIResponse = await putApi({
    url: `/ticket/${id}`,
    data: { deleted, subject, supportId, userId }
  });

  return response;
};

export const deleteMessage = async (id: string) => {
  const response: APIResponse = await deleteApi({ url: `/ticket/${id}` });

  return response;
};
