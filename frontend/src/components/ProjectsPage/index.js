import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { RouteContext } from "../../context/Route";

import Carousel from "../Carousel";
import CrudBox from "../CrudBox";

import "./projects-page.css";

const Projects = () => {
  const [projects, setProjects] = useState([1, 2, 3, 4, 5, 6, 7]);
  let [carouselContainer, setCarouselContainer] = useState([1, 2, 3, 4]);
  const [current, setCurrent] = useState(3);
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
          <div id="carousel-button-left" className="carousel-buttons">
            {`<`}
          </div>
          <div className="completed-projects-container">
            {carouselContainer.length > 0 &&
              carouselContainer.map((project) => (
                <div
                  className="completed-project-item"
                  data-route="projects"
                  onClick={handleProject}
                  data-name={project}
                >
                  {project}
                </div>
              ))}
          </div>
          <div id="carousel-button-right" className="carousel-buttons">
            {`>`}
          </div>
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
