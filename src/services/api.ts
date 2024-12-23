import axios from 'axios';
import { parseCookies, setCookie } from 'nookies';
import { APIResponse } from 'types/api/Api.type';

const api = axios.create({
  baseURL: 'https://webow-backend.onrender.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(
  (config) => {
    const { 'webow.accessToken': accessToken } = parseCookies();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      try {
        const { 'webow.accessToken': accessToken } = parseCookies();
        const response: APIResponse = await axios.post('/auth/refresh-token', {
          token: accessToken
        });

        setCookie(undefined, 'webow.accessToken', response.data.accessToken, {
          maxAge: 60 * 60 * 1
        });
        error.config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        return api.request(error.config);
      } catch (refreshError) {
        console.error('Não foi possível renovar o token', refreshError);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
