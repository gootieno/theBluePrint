import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import LandingPage from "./components/LandingPage";
import SignUpPage from "./components/SignUpPage";
import Navbar from "./components/NavBar";
import Garage from "./components/Garage";

import "./index.css";
import { restoreUser } from "./redux/user";
import Projects from "./components/ProjectsPage";
import { getUserBluePrints } from "./redux/garage";
import DynamicCarousel from "./components/DynamicCarousel";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleShowModal = () => {
    setShowLoginModal((prevState) => !prevState);
  };

  const dispatch = useDispatch();
  let user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(restoreUser())
      .then(() => setIsAuthenticated(true))
      .catch((error) => {
        if (error) return setIsAuthenticated(false);
      });
    if (user) {
      dispatch(getUserBluePrints(user.id));
    }
  }, [dispatch, user?.id]);

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
          <Route path="/dynamic-carousel">
            <DynamicCarousel />
          </Route>
        </Switch>
      )}
    </>
  );
};

export default App;
