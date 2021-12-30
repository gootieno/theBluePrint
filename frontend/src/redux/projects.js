import { csrfFetch } from "./csrf";

const PROJECTS_LOADED = "garage/PROJECTS_LOADED";

const loadProjects = (projects) => ({
  type: PROJECTS_LOADED,
  projects,
});

export const getBluePrintProjects = (blueprintId) => async (dispatch) => {
  const response = await csrfFetch(`/api/blueprints/${blueprintId}/projects`);
  if (!response.ok) throw response;

  const { projects } = await response.json();
  dispatch(loadProjects(projects));
};

let initialState = {
  steps: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROJECTS_LOADED:
      let newState = { steps: {} };
      let steps = [];
      action.projects.forEach((project) => {
        newState[project.id] = project;
        if (project.steps.length > 0) {
          steps = [...steps, ...project.steps];
          delete project.steps;
        }
      });

      steps.forEach((step) => {
        if (step) {
          newState.steps[step.id] = step;
        }
      });

      return { ...state, ...newState };
    default:
      return state;
  }
};
