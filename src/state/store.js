import { configureStore } from "@reduxjs/toolkit";
import sidenavReducer from "./slices/sidenavSlice.js";
const store = configureStore({
  reducer: {
    sidenav: sidenavReducer,
  },
});

export default store;
