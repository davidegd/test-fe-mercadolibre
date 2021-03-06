import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import App from "./routes/App";
import reportWebVitals from "./reportWebVitals";
import AppProvider from "./provider";
import "bootstrap/dist/css/bootstrap.min.css";
import { HelmetProvider } from "react-helmet-async";
const history = createBrowserHistory();

ReactDOM.hydrate(
  <HelmetProvider context={{}}>
    <AppProvider>
      <Router history={history}>
        <App />
      </Router>
    </AppProvider>
  </HelmetProvider>,
  document.getElementById("app")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
