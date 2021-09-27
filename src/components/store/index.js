import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth-slice";
import sideNavSlice from "./sideNav-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    sideNav: sideNavSlice.reducer,
  },
});

export default store;
