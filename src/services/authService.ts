import api from './api';

export const loginApi = async (cpf: string, password: string) => {
  const response = await api.post('/api/auth/login', { cpf, password });
  return response.data;
};
