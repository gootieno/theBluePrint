import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import "./home.css";

const Home = ({ isAuthenticated }) => {
  const user = useSelector((state) => state.session.user);
  if (!isAuthenticated) return <Redirect to="/" />;
  return <div id="home-page-container">this is the home page</div>;
};

export default Home;
