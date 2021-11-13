import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import "./home.css";

const Home = ({ isAuthenticated }) => {
  const user = useSelector((state) => state.session.user);
  if (!isAuthenticated) return <Redirect to="/" />;
  return (
    <div id="home-page-container">
      <h1 id="home-page-build-list" className="home-page-navigation">
        build list
      </h1>
      <div id="home-page-divider"></div>
      <h1 id="home-page-garage" className="home-page-navigation">
        garage
      </h1>
    </div>
  );
};

export default Home;
