import axiosBaseQuery from "@/config/axiosBaseQuery";

import { createApi } from "@reduxjs/toolkit/query/react";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  tagTypes: ["Tasks"],
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    addTask: builder.mutation({
      query: (newPost) => ({
        url: "toDos",
        method: "POST",
        body: newPost,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }),
      invalidatesTags: ["Tasks"]
    }),
    getAllTasks: builder.query({
      query: () => ({
        url: "toDos",
        method: "Get"
      }),
      providesTags: ["Tasks"]
    }),

    getSingleTask: builder.query({
      query: (id) => ({
        url: `toDos/${id}`,
        method: "Get"
      }),
      providesTags: ["Tasks"]
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `toDos/${id}`,
        method: "Delete"
      }),
      invalidatesTags: ["Tasks"]
    })
  })
});

export const {
  useAddTaskMutation,
  useGetAllTasksQuery,
  useGetSingleTaskQuery,
  useDeleteTaskMutation
} = tasksApi;
