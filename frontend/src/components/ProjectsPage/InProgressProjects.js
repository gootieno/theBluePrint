import { useState } from "react";
import DynamicCarousel from "../DynamicCarousel";

const InProgressProjects = ({ handleProject }) => {
  const [inProgressProjects, setInProgressProjects] = useState([1, 2, 3]);

  return (
    <>
      <h3 id="incomplete-project-title" className="project-titles">
        In Progress Projects
      </h3>
      <DynamicCarousel
        items={inProgressProjects}
        handleProject={handleProject}
        dataRoute="projects"
      />
    </>
  );
};

export default InProgressProjects;
