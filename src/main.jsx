// This is main.jsx file that renders the App component into the root element of the HTML document.

// Import necessary modules and components
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./app/store";
import { Provider } from "react-redux";

// Use ReactDOM to render the App component into the root element of the HTML document
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
