import axios from 'axios';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { APIResponse } from 'types/api/Api.type';

const api = axios.create({
  baseURL: 'https://webow-backend.onrender.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('webow.accessToken');
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
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return api(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const { 'webow.refreshToken': refreshToken } = parseCookies();
      return new Promise(async (resolve, reject) => {
        try {
          const response: APIResponse = await api.post('/auth/refresh-token', {
            token: refreshToken
          });

          setCookie(
            undefined,
            'webow.refreshToken',
            response.data.data.refreshToken,
            {
              maxAge: 30 * 24 * 60 * 60, // 30 days
              path: '/',
              secure: true,
              sameSite: 'strict'
            }
          );
          localStorage.setItem(
            'webow.accessToken',
            response.data.data.accessToken
          );
          api.defaults.headers.common['Authorization'] =
            `Bearer ${response.data.data.accessToken}`;
          originalRequest.headers.Authorization = `Bearer ${response.data.data.accessToken}`;
          processQueue(null, response.data.data.accessToken);
          resolve(api(originalRequest));
        } catch (refreshError) {
          processQueue(refreshError, null);
          localStorage.removeItem('webow.accessToken');
          localStorage.removeItem('webow.currentUserId');
          destroyCookie(null, 'webow.refreshToken', {
            path: '/'
          });
          reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      });
    }
    return Promise.reject(error);
  }
);

export default api;
