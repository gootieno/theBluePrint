import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "./redux/user";
import LandingPage from "./components/LandingPage";
import "./index.css";
import Login from "./components/Login";
import Garage from "./components/Garage";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const dispatch = useDispatch();

  // useEffect(() => {
  // 	dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true))
  // }, [dispatch])

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
