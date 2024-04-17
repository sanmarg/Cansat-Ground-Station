import { configureStore } from "@reduxjs/toolkit";
import TelemetryReducer from "../features/telemetry/TelemetrySlice";

export default configureStore({
  reducer: {
    telemetry: TelemetryReducer,
  },
});
