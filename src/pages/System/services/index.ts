import { getApi, putApi } from 'services/apiService';
import { APIResponse } from 'types/api/Api.type';
import { ConfigurationGetResponse } from '../types/SystemGetApi.type';
import { ConfigurationPutRequest } from '../types/SystemPutApi.type';

export const getConfiguration = async () => {
  const response: APIResponse<ConfigurationGetResponse> = await getApi({
    url: `/configuration`
  });

  return response;
};

export const updateConfiguration = async (
  id: string,
  configuration: ConfigurationPutRequest
) => {
  const response: APIResponse = await putApi({
    url: `/configuration/${id}`,
    data: configuration
  });

  return response;
};
