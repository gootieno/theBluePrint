import { useState } from "react";
import { useSelector } from "react-redux";
import DynamicCarousel from "../DynamicCarousel";

const CompletedProjects = ({ handleProject }) => {
  let projects = useSelector((state) => {
    if (!state.garage.projects) return null;
    else
      return Object.values(state.garage.projects).filter(
        (project) => project.completed
      );
  });

  return (
    <>
      <h2 id="complete-project-title" className="project-titles">
        Completed Projects
      </h2>
      {projects && projects.length ? (
        <DynamicCarousel
          handleProject={handleProject}
          items={projects}
          dataRoute="projects"
        />
      ) : (
        <div id="completed-projects__incomplete-container">
          <h3 id="completed-projects__incomplete">No Completed Projects Yet</h3>
        </div>
      )}
    </>
  );
};

export default CompletedProjects;
