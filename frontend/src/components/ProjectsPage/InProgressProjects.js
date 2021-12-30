import { useSelector } from "react-redux";
import DynamicCarousel from "../DynamicCarousel";

const InProgressProjects = ({ handleProject }) => {
  let projects = useSelector((state) => {
    if (!state.garage.projects) return null;
    else
      return Object.values(state.garage.projects).filter(
        (project) => !project.completed
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
        <div>
          <h3>Use Work Bench To Create A Project</h3>
        </div>
      )}
    </>
  );
};

export default InProgressProjects;
