import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: true, loginAs: "student" };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.loginAs = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
