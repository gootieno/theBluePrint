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
import Projects from "./components/Projects";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleShowModal = () => {
    setShowLoginModal((prevState) => !prevState);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreUser())
      .then(() => setIsAuthenticated(true))
      .catch((error) => {
        if (error) return setIsAuthenticated(false);
      });
  }, [dispatch]);

  return (
    <>
      <Navbar
        isAuthenticated={isAuthenticated}
        handleShowModal={handleShowModal}
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
      />
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/signup">
        <SignUpPage />
      </Route>
      {isAuthenticated && (
        <Switch>
          <Route path="/home">
            <Home isAuthenticated={isAuthenticated} />
          </Route>
          <Route path="/garage">
            <Garage />
          </Route>
          <Route path="/blueprint/projects">
            <Projects />
          </Route>
        </Switch>
      )}
    </>
  );
};

export default App;
