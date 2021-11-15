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
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [demo, setDemo] = useState({
    isDemo: false,
    email: "demo@user.io",
    password: "password",
  });

  const handleShowModal = () => {
    setShowLoginModal((prevState) => !prevState);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreUser()).then(() => setIsAuthenticated(true));
  }, [dispatch]);

  return (
    <>
      <Navbar
        isAuthenticated={isAuthenticated}
        handleShowModal={handleShowModal}
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
        demo={demo}
      />
      {isAuthenticated && (
        <Switch>
          <Route exact path="/">
            <LandingPage
              setShowLoginModal={setShowLoginModal}
              setDemo={setDemo}
            />
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
