import { createSlice } from "@reduxjs/toolkit";

const initialSideNavState = { show: false };

const sideNavSlice = createSlice({
  name: "showSideNav",
  initialState: initialSideNavState,
  reducers: {
    showSideNav(state) {
      state.show = true;
    },
    hideSideNav(state) {
      state.show = false;
    },
  },
});

export const sideNavActions = sideNavSlice.actions;
export default sideNavSlice;
