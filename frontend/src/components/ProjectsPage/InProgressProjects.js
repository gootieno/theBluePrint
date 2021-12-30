import { useSelector } from "react-redux";
import DynamicCarousel from "../DynamicCarousel";

const InProgressProjects = ({ handleProject }) => {
  let projects = useSelector((state) => {
    if (!state.projects) return null;
    else
      return Object.values(state.projects).filter(
        (project) => project.completed === false
      );
  });

  return (
    <>
      <h2 id="incomplete-project-title" className="project-titles">
        In Progress Projects
      </h2>
      {projects && projects.length ? (
        <DynamicCarousel
          items={projects}
          handleProject={handleProject}
          dataRoute="projects"
        />
      ) : (
        <div
          id="incomplete-projects-message-container"
          className="project-message-containers"
        >
          <h3 id="incomplete-projects-message">
            Use Work Bench To Create A Project
          </h3>
        </div>
      )}
    </>
  );
};

export default InProgressProjects;
