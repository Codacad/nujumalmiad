import { createSlice } from "@reduxjs/toolkit";

const sidenavSlice = createSlice({
  name: "sidenav",
  initialState: {
    toggle: false,
  },

  reducers: {
    setToggle: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { setToggle } = sidenavSlice.actions;

export default sidenavSlice.reducer;
