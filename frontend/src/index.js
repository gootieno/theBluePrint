import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import configureStore from "./redux/store";
import { ModalProvider } from "./context/Modal";
import RouteProvider from "./context/Route";

import { restoreCSRF, csrfFetch } from "./redux/csrf";

const store = configureStore();
if (process.env.NODE_ENV !== "production") {
  restoreCSRF();
  window.csrfFetch = csrfFetch;
  window.store = store;
}

const Root = () => {
  return (
    <Provider store={store}>
      <ModalProvider>
        <RouteProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </RouteProvider>
      </ModalProvider>
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
