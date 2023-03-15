import React from "react";
import ReactDOM from "react-dom/client";
import { IconContext } from "react-icons";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./utils/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <IconContext.Provider value={{ size: "24px" }}>
        <ScrollToTop />
        <App />
      </IconContext.Provider>
    </Router>
  </React.StrictMode>
);
