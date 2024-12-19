import axios from 'axios';
import { parseCookies, setCookie } from 'nookies';

const { 'webow.token': accessToken } = parseCookies();

const api = axios.create({
  baseURL: 'https://webow-backend.onrender.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(
  (config) => {
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
        const { data } = await axios.post('/auth/refresh-token', {
          accessToken
        });

        setCookie(undefined, 'webow.accessToken', data.accessToken, {
          maxAge: 60 * 60 * 1
        });
        error.config.headers.Authorization = `Bearer ${data.accessToken}`;
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
