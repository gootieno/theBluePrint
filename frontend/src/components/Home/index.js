import { Redirect } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./home.css";
import { getUserBluePrints } from "../../redux/garage";

const Home = ({ isAuthenticated }) => {
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const history = useHistory();

  const handleBuildList = () => {
    alert("implement feature");
  };

  const handleGarage = () => {
    dispatch(getUserBluePrints(user.id));
    history.push("/garage");
  };

  if (!isAuthenticated) return <Redirect to="/" />;
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
