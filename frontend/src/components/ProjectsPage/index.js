import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { RouteContext } from "../../context/Route";

import Carousel from "../Carousel";
import CrudBox from "../CrudBox";

import "./projectsPage.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [current, setCurrent] = useState(0);
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
    // setProjects(projects[current]);
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
        {/**------------------------------------------------------------------ */}
        <h3 id="complete-project-title" className="project-titles">
          Completed Projects
        </h3>
        <div className="project-carousel-container">
          {!projects.length ? (
            <>
              <div id="carousel-button-left" className="carousel-buttons">
                {`<`}
              </div>
              <div className="completed-projects-container">
                <div
                  className="completed-project-item"
                  data-route="projects"
                  onClick={handleProject}
                  data-name="project-1"
                >
                  some project info here
                </div>
                <div
                  className="completed-project-item"
                  data-route="projects"
                  onClick={handleProject}
                  data-name="project-2"
                >
                  some project info here
                </div>
                <div
                  className="completed-project-item"
                  data-route="projects"
                  onClick={handleProject}
                  data-name="project-3"
                >
                  some project info here
                </div>
                <div
                  className="completed-project-item"
                  data-route="projects"
                  onClick={handleProject}
                  data-name="project-4"
                >
                  some project info here
                </div>
              </div>
              <div id="carousel-button-right" className="carousel-buttons">
                {`>`}
              </div>
            </>
          ) : (
            <div id="completed-project">Add from in progress</div>
          )}
        </div>
      </div>
      {/**------------------------note: create separate components----------- */}
      <div className="in-progress project">
        <h3 id="incomplete-project-title" className="project-titles">
          In Progress Projects
        </h3>
        {/* <div className="project-carousel-container">
          {!projects.length ? (
            <>
              <div id="carousel-button-left" className="carousel-buttons">
                {`<`}
              </div>
              <div className="completed-projects-container">
                <div className="completed-project-item">
                  some project info here
                </div>
                <div className="completed-project-item">
                  some project info here
                </div>
                <div className="completed-project-item">
                  some project info here
                </div>
                <div className="completed-project-item">
                  some project info here
                </div>
              </div>
              <div id="carousel-button-left" className="carousel-buttons">
                {`<`}
              </div>
            </>
          ) : (
            <div id="completed-project">Add from in progress</div>
          )}
        </div> */}
      </div>
      {/**------------------------------------------------------------------ */}
    </div>
  );
};

export default Projects;
