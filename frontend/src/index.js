import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import configureStore from "./redux/store";
import { ModalProvider } from "./context/Modal";
import RouteProvider from "./context/Route";
import FormProvider from "./context/Form";

const store = configureStore();

const Root = () => {
  return (
    <Provider store={store}>
      <FormProvider>
        <ModalProvider>
          <RouteProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </RouteProvider>
        </ModalProvider>
      </FormProvider>
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
