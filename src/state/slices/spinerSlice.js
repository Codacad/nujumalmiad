import { createSlice } from "@reduxjs/toolkit";

const spinerSlice = createSlice({
  name: "spiner",
  initialState: {
    loading: false,
  },
  reducers: {
    showSpinner: (state) => {
      state.loading = true;
    },
    hideSpinner: (state) => {
      state.loading = false;
    },
  },
});

export const { showSpinner, hideSpinner } = spinerSlice.actions;
export default spinerSlice.reducer;
