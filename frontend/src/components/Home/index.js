import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./home.css";

const Home = ({ isAuthenticated }) => {
  const user = useSelector((state) => state.session.user);

  const history = useHistory();
  if (!isAuthenticated) return <Redirect to="/" />;

  const handleBuildList = () => {
    alert("implement feature");
  };

  const handleGarage = () => {
    history.push("/garage");
  };

  return (
    <div id="home-page-container">
      <h1
        id="home-page-build-list"
        className="home-page-navigation"
        onClick={handleBuildList}
      >
        build list
      </h1>
      <div id="home-page-divider"></div>
      <h1
        id="home-page-garage"
        className="home-page-navigation"
        onClick={handleGarage}
      >
        garage
      </h1>
    </div>
  );
};

export default Home;
