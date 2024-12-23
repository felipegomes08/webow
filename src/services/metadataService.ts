import { Metadata } from 'types/metadata';
import { getApi } from './apiService';

export const getMetadata = async (): Promise<Metadata> => {
  const response = await getApi({ url: '/metadata' });
  return response.data;
};
