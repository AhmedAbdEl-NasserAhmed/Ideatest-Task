import { Storage } from "@/lib/helpers/Storage";
import axios, { InternalAxiosRequestConfig } from "axios";

interface AxiosProps {
  url?: string;
  method?: string;
  body?: any;
  params?: string;
  headers?: Record<string, string>; // Add this line
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
  return async ({ url, method, body, params, headers }: AxiosProps) => {
    // Update this line
    try {
      const config = {
        url,
        method,
        data: body,
        params,
        headers: {
          ...headers
        }
      };

      const result = await axiosInstance(config);
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
