import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import LandingPage from "./components/LandingPage";
import SignUpPage from "./components/SignUpPage";
import Navbar from "./components/NavBar";
import Steps from "./components/Steps";
import Projects from "./components/ProjectsPage";
import Garage from "./components/Garage";

import "./index.css";
import { authenticate } from "./redux/user";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleShowModal = () => {
    setShowLoginModal((prevState) => !prevState);
  };

  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(authenticate())
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
          <Route path="/garage">
            <Garage />
          </Route>
          <Route path="/blueprints/:blueprintId/projects">
            <Projects />
          </Route>
          <Route path="/projects/:projectId/steps">
            <Steps />
          </Route>
        </Switch>
      )}
    </>
  );
};

export default App;
