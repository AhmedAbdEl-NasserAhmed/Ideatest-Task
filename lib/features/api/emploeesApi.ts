import axiosBaseQuery from "@/config/axiosBaseQuery";

import { createApi } from "@reduxjs/toolkit/query/react";

export const employeesApi = createApi({
  reducerPath: "employeesApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getAllEmployees: builder.query({
      query: () => ({
        url: "employees",
        method: "Get"
      })
    })
  })
});

export const { useGetAllEmployeesQuery } = employeesApi;
