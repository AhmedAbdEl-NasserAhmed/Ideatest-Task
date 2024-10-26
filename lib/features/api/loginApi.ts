import axiosBaseQuery from "@/config/axiosBaseQuery";

import { createApi } from "@reduxjs/toolkit/query/react";

export const loginSliceApi = createApi({
  reducerPath: "loginSliceApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    singUp: builder.mutation({
      query: (newPost) => ({
        url: "/auth/signup",
        method: "POST",
        body: newPost
      })
    })
  })
});

export const { useSingUpMutation } = loginSliceApi;
