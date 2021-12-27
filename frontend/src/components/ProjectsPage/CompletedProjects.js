import { useState } from "react";
import DynamicCarousel from "../DynamicCarousel";

const CompletedProjects = ({ handleProject }) => {
  const [completedProjects, setCompletedProjects] = useState([
    1, 2, 3, 4, 5, 6, 7,
  ]);
  return (
    <>
      <h3 id="complete-project-title" className="project-titles">
        Completed Projects
      </h3>
      <DynamicCarousel
        handleProject={handleProject}
        items={completedProjects}
        dataRoute="projects"
      />
    </>
  );
};

export default CompletedProjects;
