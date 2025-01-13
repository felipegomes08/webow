import api from './api';

export const loginApi = async (login: string, password: string) => {
  const response = await api.post('/auth/login', { login, password });
  return response.data;
};
