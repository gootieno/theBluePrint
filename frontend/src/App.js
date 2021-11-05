import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Login from "./components/LoginForm";
import Navbar from "./components/NavBar";
import Garage from "./components/Garage";

import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/garage">
          <Garage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
};

export default App;
