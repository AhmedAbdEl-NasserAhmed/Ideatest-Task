import axiosBaseQuery from "@/config/axiosBaseQuery";

import { createApi } from "@reduxjs/toolkit/query/react";

export const loginSliceApi = createApi({
  reducerPath: "loginSliceApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    singUp: builder.mutation({
      query: (newPost) => ({
        url: "auth/signup",
        method: "POST",
        body: newPost
      })
    }),
    signIn: builder.mutation({
      query: (newPost) => ({
        url: "auth/login",
        method: "POST",
        body: newPost
      })
    })
  })
});

export const { useSingUpMutation, useSignInMutation } = loginSliceApi;
