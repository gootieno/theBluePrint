import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import LandingPage from "./components/LandingPage";
import SignUpPage from "./components/SignUpPage";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Garage from "./components/Garage";

import "./index.css";
import { restoreUser } from "./redux/user";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(restoreUser()).then(() => setIsAuthenticated(true));
  }, [dispatch]);

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      {isAuthenticated && (
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/home">
            <Home isAuthenticated={isAuthenticated} />
          </Route>
          <Route path="/garage">
            <Garage />
          </Route>
        </Switch>
      )}
    </>
  );
};

export default App;
