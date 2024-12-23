import { postApi } from 'services/apiService';
import { UserPostRequest } from '../types/UserApi.type';

export const createUser = async (user: UserPostRequest) => {
  const response = await postApi({ url: '/users', data: user });

  return response;
};
