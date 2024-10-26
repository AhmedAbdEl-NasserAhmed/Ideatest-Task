import { Storage } from "@/helpers/Storage";
import axios, { InternalAxiosRequestConfig } from "axios";

interface AxiosProps {
  url?: string;
  method?: string;
  body?: any;
  params?: string;
}

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = Storage.getItem("token", false);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const axiosBaseQuery = () => {
  return async ({ url, method, body, params }: AxiosProps) => {
    try {
      const result = await axiosInstance({
        url,
        method,
        data: body,
        params
      });
      return { data: result.data };
    } catch (err: any) {
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message
        }
      };
    }
  };
};

export default axiosBaseQuery;
