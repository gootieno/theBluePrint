import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { RouteContext } from "../../context/Route";

import CrudBox from "../CrudBox";
import CompletedProjects from "./CompletedProjects";
import InProgressProjects from "./InProgressProjects";

import "./projects-page.css";

const Projects = () => {
  const [name, setName] = useState(null);
  const { route, setRoute } = useContext(RouteContext);

  const { blueprintId } = useParams();
  const blueprints = useSelector((state) => state.garage.blueprints);
  let blueprint = blueprints[blueprintId];

  let currentNode;
  const handleProject = (event) => {
    currentNode = event.target.dataset;
    setRoute(currentNode.route);
    setName(currentNode.name);
  };

  if (!blueprint) return null;
  return (
    <div className="projects-container">
      <div id="projects-title-crud">
        <h2 id="blueprint-project-title">
          {`Working on your ${blueprint.name}`}
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
