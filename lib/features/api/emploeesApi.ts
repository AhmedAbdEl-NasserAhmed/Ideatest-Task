import axiosBaseQuery from "@/config/axiosBaseQuery";

import { createApi } from "@reduxjs/toolkit/query/react";

export const employeesApi = createApi({
  reducerPath: "employeesApi",
  tagTypes: ["Employees"],
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getAllEmployees: builder.query({
      query: () => ({
        url: "employees",
        method: "Get"
      }),
      providesTags: ["Employees"]
    })
  })
});

export const { useGetAllEmployeesQuery } = employeesApi;
