import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { RouteContext } from "../../context/Route";

import Carousel from "../Carousel";
import CrudBox from "../CrudBox";

import "./projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([1]);
  const [current, setCurrent] = useState(0);
  const { route, setRoute } = useContext(RouteContext);

  const { blueprintId } = useParams();

  const blueprints = useSelector((state) => state.garage.blueprints);

  let blueprint = blueprints[blueprintId];

  let currentNode;
  const handleProject = (event) => {
    currentNode = event.target.dataset;
  };

  if (!blueprint) return null;
  return (
    <div className="projects-container">
      <h2 id="blueprint-project-title">
        {`Working on your ${blueprint.name}`}
      </h2>
      <div className="completed project">
        {/**------------------------------------------------------------------ */}
        <h3 id="complete-project-title" className="project-titles">
          Completed Projects
        </h3>
        <div className="project-carousel-container">
          <div className="completed-projects">
            {projects ? (
              <div>Finish an In Progress Project or create one!</div>
            ) : (
              <>
                <Carousel
                  carouselItems={projects}
                  current={current}
                  setCurrent={setCurrent}
                  handleCarouselItem={handleProject}
                  dataRoute="project"
                />
              </>
            )}
          </div>
        </div>
      </div>
      {/**------------------------note: create separate components----------- */}
      <div className="in-progress project">
        <h3 id="incomplete-project-title" className="project-titles">
          In Progress Projects
        </h3>
        <div className="project-carousel-container">
          <div className="in-progress-projects">
            {projects ? (
              <h3>None yet :/ Finish an In Progress Project or create one!</h3>
            ) : (
              <>
                <Carousel
                  carouselItems={projects}
                  current={current}
                  setCurrent={setCurrent}
                  handleCarouselItem={handleProject}
                  dataRoute="project"
                />
              </>
            )}
          </div>
        </div>
      </div>
      {/**------------------------------------------------------------------ */}
      <div id="create-project-container">
        <CrudBox route={route} setRoute={setRoute} />
      </div>
    </div>
  );
};

export default Projects;
