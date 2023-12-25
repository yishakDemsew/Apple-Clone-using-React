import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";

// Bootstrap CSS import
import "bootstrap/dist/css/bootstrap.min.css";
// import BrowserRouter
import { BrowserRouter as Router } from "react-router-dom";

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
