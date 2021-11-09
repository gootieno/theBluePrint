import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import LandingPage from "./components/LandingPage";
import SignUpPage from "./components/SignUpPage";
import Navbar from "./components/NavBar";
import Garage from "./components/Garage";

import "./index.css";
import { restoreUser } from "./redux/user";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navbar isLoaded={isLoaded} />
      {isLoaded && (
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
      )}
    </>
  );
};

export default App;
