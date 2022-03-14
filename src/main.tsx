import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import { GlobalStyles } from "./styles/global";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);
