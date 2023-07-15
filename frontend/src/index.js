import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ModalProvider } from "./Context/FormModal";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";

const Root = () => {
  return (
    <ModalProvider>
      <Router>
        <App />
      </Router>
    </ModalProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
