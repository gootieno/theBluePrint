import { useHistory } from "react-router-dom";
import "./projects.css";

const Projects = () => {
  const history = useHistory();
  const handleTitleClick = () => {};
  return (
    <>
      <h2 id="blueprint-project-title" onClick={handleTitleClick}>
        U-Turn to Garage
      </h2>
      <div id="project-list">LIST OF PROJECTS</div>
      <div id="blueprint-project-container">
        <div className="blueprint-projects">
          <div>project category</div>
          <div>project media</div>
          <div>project description</div>
        </div>
      </div>
      <div id="blueprint-project-create" className="crud-action-buttons">
        Create Section
      </div>
    </>
  );
};

export default Projects;
