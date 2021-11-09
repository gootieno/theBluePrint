import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import SignUpPage from "./components/SignUpPage";
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
        <Route path="/register">
          <SignUpPage />
        </Route>
        <Route path="/home">
          <div>this is the home page</div>
        </Route>
        <Route path="/garage">
          <Garage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
