import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <LandingPage />
      </Route>
    </BrowserRouter>
  );
};

export default App;
