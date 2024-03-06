import React from "react";
import { createRoot } from "react-dom/client"; // Promenite import
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./app/store";
// import "antd/dist/antd.css";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );
} else {
  console.error("Element sa ID 'root' nije pronađen.");
}
