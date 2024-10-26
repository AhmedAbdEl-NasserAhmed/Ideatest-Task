import { configureStore } from "@reduxjs/toolkit";

import { loginSliceApi } from "./features/api/loginApi";

import { userSlice } from "./slices/userSlice";
import { employeesApi } from "./features/api/emploeesApi";
import { tasksApi } from "./features/api/tasksApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userSlice.reducer,
      [loginSliceApi.reducerPath]: loginSliceApi.reducer,
      [employeesApi.reducerPath]: employeesApi.reducer,
      [tasksApi.reducerPath]: tasksApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        loginSliceApi.middleware,
        employeesApi.middleware,
        tasksApi.middleware
      )
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
