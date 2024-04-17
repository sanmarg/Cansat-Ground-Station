import { createSlice } from "@reduxjs/toolkit";

const dataSend = {
  packetCount: 0,
  mode: 0,
  state: 0,
  altitude: 0,
  temperature: 0,
  pressure: 0,
  voltage: 0,
  gpsTime: 0,
  gpsLatitude: 0,
  gpsLongitude: 0,
  gpsSats: 0,
  tiltX: 0,
  tiltY: 0,
  rotZ: 0,
};

export const TelemetrySlice = createSlice({
  name: "telemetry",
  initialState: {
    value: dataSend,
  },
  reducers: {
    pushData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { pushData } = TelemetrySlice.actions;
export default TelemetrySlice.reducer;
