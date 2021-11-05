import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/user";

import Modal from "../Modal";
import NavBar from "../NavBar";
import Login from "../Login";

import "./landingpage.css";

const LandingPage = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLoginModal = () => {
    setLoginModal((prevState) => !prevState);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await dispatch(loginUser(credentials));
    if (success) history.push("/garage");
  };
  return (
    <div id="landing-page" className="landing-page-container">
      <NavBar handleLoginModal={handleLoginModal} loginModal={loginModal} />
      <Modal>
        <Login
          handleLogin={handleLogin}
          credentials={credentials}
          handleInputChange={handleInputChange}
        />
      </Modal>
    </div>
  );
};

export default LandingPage;
