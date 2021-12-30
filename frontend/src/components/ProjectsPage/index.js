import { useState, useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { RouteContext } from "../../context/Route";
import { getBluePrintProjects } from "../../redux/projects";

import CrudBox from "../CrudBox";
import CompletedProjects from "./CompletedProjects";
import InProgressProjects from "./InProgressProjects";

import "./projects-page.css";

const Projects = () => {
  const [name, setName] = useState(null);
  const { route, setRoute } = useContext(RouteContext);

  const dispatch = useDispatch();

  const { blueprintId } = useParams();
  const blueprints = useSelector((state) => state.garage.blueprints);
  let blueprint = blueprints[blueprintId];

  useEffect(() => {
    if (blueprint) {
      setName(blueprint.name);
    }
    dispatch(getBluePrintProjects(blueprintId));
  }, [dispatch]);

  const handleProject = (event) => {
    const currentNode = event.target.dataset;
    setRoute(currentNode.route);
    setName(currentNode.name);
  };

  if (!blueprint) return null;

  return (
    <div className="projects-container">
      <div id="projects-title-crud">
        <h2 id="blueprint-project-title-container">
          Working on your
          <span
            data-route="blueprints"
            data-name={blueprint.name}
            onClick={handleProject}
            className="blueprint-project-title"
          >
            {blueprint.name}
          </span>
        </h2>
        <div id="create-project-container">
          <CrudBox route={route} name={name} />
        </div>
      </div>
      <div className="completed project">
        <CompletedProjects handleProject={handleProject} />
      </div>
      <div className="in-progress project">
        <InProgressProjects handleProject={handleProject} />
      </div>
    </div>
  );
};

export default Projects;
