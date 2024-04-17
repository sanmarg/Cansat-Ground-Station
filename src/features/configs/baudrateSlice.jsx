import { createSlice } from "@reduxjs/toolkit";

export const baudrateSlice = createSlice({
  name: "baudrate",
  initialState: {
    value: 115200,
  },
  reducers: {
    setBaudrate: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setBaudrate } = baudrateSlice.actions;
export default baudrateSlice.reducer;
