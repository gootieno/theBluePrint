import { useSelector } from "react-redux";
import { useParams } from "react-router";
import DynamicCarousel from "../DynamicCarousel";

const InProgressProjects = ({ handleProject }) => {
  const { blueprintId } = useParams();
  let projects = useSelector((state) => {
    return Object.values(state.projects).filter(
      (project) => project.completed === false
    );
  });
  console.log(projects);
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
          <h3 id="incomplete-projects-message" className="project-messages">
            Use Work Bench To Create A Project
          </h3>
        </div>
      )}
    </>
  );
};

export default InProgressProjects;
