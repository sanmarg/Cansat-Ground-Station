import { createSlice } from "@reduxjs/toolkit";

export const connectedSlice = createSlice({
  name: "connected",
  initialState: {
    value: false,
  },
  reducers: {
    setConnected: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setConnected } = connectedSlice.actions;
export default connectedSlice.reducer;
