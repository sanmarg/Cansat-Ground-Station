import { createSlice } from "@reduxjs/toolkit";

export const TelemetrySlice = createSlice({
  name: "telemetry",
  initialState: {
    value: null,
  },
  reducers: {
    pushData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { pushData } = TelemetrySlice.actions;
export default TelemetrySlice.reducer