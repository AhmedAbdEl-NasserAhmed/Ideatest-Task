import { configureStore } from "@reduxjs/toolkit";

import { loginSliceApi } from "./features/api/loginApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [loginSliceApi.reducerPath]: loginSliceApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(loginSliceApi.middleware)
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
