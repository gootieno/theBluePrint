import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import "./home.css";

const Home = ({ isAuthenticated }) => {
  const user = useSelector((state) => state.session.user);
  if (!isAuthenticated) return <Redirect to="/" />;
  return (
    <div id="home-page-container">
      <div id="home-page-build-list">build list</div>
      <div id="home-page-divider"></div>
      <div id="home-page-garage">garage</div>
    </div>
  );
};

export default Home;
