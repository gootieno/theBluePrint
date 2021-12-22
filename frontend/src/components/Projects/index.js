import { useState } from "react";
import { useHistory } from "react-router-dom";

import Carousel from "../Carousel";
import CrudBox from "../CrudBox";

import "./projects.css";

const Projects = () => {
  const [sections, setSections] = useState([1]);
  const [current, setCurrent] = useState(0);

  return (
    <div className="projects-container">
      <div className="completed project">
        <h2 id="complete-project-title" className="project-titles">
          Completed Projects
        </h2>
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
      <div id="create-project-container">{/* <CrudBox /> */}</div>
    </div>
  );
};

export default Projects;
