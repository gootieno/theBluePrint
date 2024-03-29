import "./workbench.css";

const WorkBench = () => {
  return (
    <div id="work-bench-container">
      <button id="create" className="work-bench-buttons">
        Create
      </button>
      <button id="edit" className="work-bench-buttons">
        Edit
      </button>
      <button id="delete" className="work-bench-buttons">
        Delete
      </button>
    </div>
  );
};

export default WorkBench;
