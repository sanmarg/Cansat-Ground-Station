import { configureStore } from "@reduxjs/toolkit";
import TelemetryReducer from "../features/telemetry/TelemetrySlice";
import baudrateReducer from "../features/configs/baudrateSlice";
import connectedReducer from "../features/configs/connectedSlice";

export default configureStore({
  reducer: {
    telemetry: TelemetryReducer,
    baudrate: baudrateReducer,
    connected: connectedReducer
  },
});
