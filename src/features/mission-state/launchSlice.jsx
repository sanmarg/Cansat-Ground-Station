import { createSlice } from "@reduxjs/toolkit";

export const launchSlice = createSlice({
  name: "launch",
  initialState: {
    value: false,
  },
  reducers: {
    setLaunch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLaunch } = launchSlice.actions;
export default launchSlice.reducer;
