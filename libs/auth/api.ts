import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { API_BASE_URL } from '../../contsants/api';

declare module 'axios' {
  export interface AxiosRequestConfig {
    _retry?: boolean;
  }
}

const api: AxiosInstance = axios.create({
  baseURL: 'https://shippex-demo.bc.brandimic.com/api/method',
  withCredentials: true,
});

//  REQUEST – attach token from AsyncStorage
api.interceptors.request.use(
  async config => {
    console.log(config, 'configg');
    const token = await AsyncStorage.getItem('accessToken');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

//  REFRESH LOGIC
let isRefreshing = false;
let failedQueue: Array<[() => void, (err: unknown) => void]> = [];

const processQueue = (err: unknown, token?: string) => {
  failedQueue.forEach(([resolve, reject]) => {
    if (err) reject(err);
    else resolve();
  });
  failedQueue = [];
};

//  RESPONSE – handle 401
api.interceptors.response.use(
  res => res,
  async (error: AxiosError) => {
    const originalConfig = error.config as AxiosRequestConfig;

    if (error.response?.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push([() => resolve(api(originalConfig)), reject]);
        });
      }

      isRefreshing = true;

      try {
        const refreshToken = await AsyncStorage.getItem('refreshToken');
        if (!refreshToken) throw new Error('No refresh token');

        const { data } = await axios.post(
          `${API_BASE_URL}/auth/refresh-token`,
          { refreshToken },
          { withCredentials: true },
        );

        const newAccessToken = data.accessToken;
        const newRefreshToken = data.refreshToken;

        // Save new tokens
        await AsyncStorage.setItem('accessToken', newAccessToken);
        await AsyncStorage.setItem('refreshToken', newRefreshToken);

        processQueue(null, newAccessToken);

        // Retry original request with new token
        if (originalConfig.headers)
          originalConfig.headers['Authorization'] = `Bearer ${newAccessToken}`;

        return api(originalConfig);
      } catch (err) {
        processQueue(err);
        await AsyncStorage.clear(); // clear tokens
        // Redirect to login or notify
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

export default api;
