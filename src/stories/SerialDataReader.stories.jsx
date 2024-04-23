import React from "react";
import { Provider } from "react-redux";
import store from "../app/store";
import SerialDataReader from "../components/Serial/SerialDataReader";

export default {
  title: "SerialDataReader",
  component: SerialDataReader,
};

export const Default = () => (
  <Provider store={store}>
    <SerialDataReader />
  </Provider>
);
