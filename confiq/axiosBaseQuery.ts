import axios, { InternalAxiosRequestConfig } from "axios";

interface AxiosProps {
  url?: string;
  method?: string;
  body?: any;
  params?: any;
}

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("userToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Create the base query function
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
