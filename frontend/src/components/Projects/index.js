import { useState } from "react";
import { useHistory } from "react-router-dom";

import CrudBox from "../CrudBox";

import "./projects.css";

const Projects = () => {
  const [sections, setSections] = useState([1]);

  return (
    <>
      <div id="projects-container">
        <h2 id="projects-container-title">Projects</h2>
        <CrudBox />
      </div>
    </>
  );
};

export default Projects;
