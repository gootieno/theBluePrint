import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import ProtectedRoute from "./components/ProtectedRoute";

import LandingPage from "./components/LandingPage";
import SignUpPage from "./components/SignUpPage";
import Navbar from "./components/NavBar";
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
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Switch>
        <Route path="/register">
          <SignUpPage />
        </Route>
        <ProtectedRoute path="/home">
          <div>this is the home page and its protected</div>
        </ProtectedRoute>
        <Route path="/garage">
          <Garage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
