import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import Carousel from "../Carousel";
import CrudBox from "../CrudBox";

import "./projects.css";

const Projects = () => {
  const [sections, setSections] = useState([1]);
  const [current, setCurrent] = useState(0);
  const [route, setRoute] = useState(null);

  const { blueprintId } = useParams();

  const blueprints = useSelector((state) => state.garage.blueprints);

  let blueprint = blueprints[blueprintId];

  return (
    <div className="projects-container">
      <h2 id="blueprint-project-title" className="project-titles">
        {`Working on your ${blueprint.name}`}
      </h2>
      <div className="completed project">
        <h3></h3>
        <div className="project-carousel-container">
          {/* <Carousel current={current} setCurrent={setCurrent} /> */}
        </div>
      </div>
      <div className="project">
        <h2 id="incomplete-project-title" className="project-titles">
          InComplete Projects
        </h2>
        <div className="project-carousel-container">project item</div>
      </div>
      <div id="create-project-container">
        <CrudBox route={route} />
      </div>
    </div>
  );
};

export default Projects;
