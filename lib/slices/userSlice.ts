import { Storage } from "@/lib/helpers/Storage";
import { createSlice } from "@reduxjs/toolkit";

let user = null;

let token = null;

if (Storage.getItem("user") !== undefined) {
  user = Storage.getItem("user");
  token = Storage.getItem("token", false);
}

const initialState = {
  user: user || null,
  token: token || null,
  isAuthenticated: !!token
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    assignUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = !!state.token;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = null;
    }
  }
});

export const { assignUser, logout } = userSlice.actions;
