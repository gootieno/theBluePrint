import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./Components/Pages/LandingPage";
import LoginPage from "./Components/Pages/LoginPage";

const App = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleCredentials = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/login">
          <LoginPage
            credentials={credentials}
            handleCredentials={handleCredentials}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
