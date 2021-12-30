import { useSelector } from "react-redux";
import DynamicCarousel from "../DynamicCarousel";

const CompletedProjects = ({ handleProject }) => {
  let projects = useSelector((state) => {
    if (!state.projects) return null;
    else
      return Object.values(state.projects).filter(
        (project) => project.completed === true
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
        <div
          data-route="projects"
          data-name="projects"
          id="completed-projects-incomplete-container"
          className="project-message-containers"
          onClick={handleProject}
        >
          <h3
            data-route="projects"
            data-name="projects"
            id="completed-projects-incomplete-message"
            className="project-messages"
            onClick={handleProject}
          >
            No Completed Projects Yet
          </h3>
        </div>
      )}
    </>
  );
};

export default CompletedProjects;
