import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {},
});
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
