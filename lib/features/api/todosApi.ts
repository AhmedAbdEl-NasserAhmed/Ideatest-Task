import axiosBaseQuery from "@/config/axiosBaseQuery";

import { createApi } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: axiosBaseQuery(),

  endpoints: (builder) => ({
    addTodo: builder.mutation({
      query: (newPost) => ({
        url: "toDos",
        method: "POST",
        body: newPost,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
    })
  })
});

export const { useAddTodoMutation } = todosApi;
