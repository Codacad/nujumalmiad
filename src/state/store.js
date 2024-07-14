import { configureStore } from "@reduxjs/toolkit";
import sidenavReducer from "./slices/sidenavSlice.js";
import spinerReducer from "./slices/spinerSlice";
const store = configureStore({
  reducer: {
    sidenav: sidenavReducer,
    spiner: spinerReducer,
  },
});

export default store;
