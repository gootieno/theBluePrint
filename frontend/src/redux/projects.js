import { csrfFetch } from "./csrf";
import { dynamicFetch } from "./dynamicFetch";

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

export const postBlueprintProject = (payload) => async (dispatch) => {
  const { response } = await dynamicFetch(payload);
  if (response.ok) {
    const data = await response.json();
    console.log(data);
  }
};

let initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROJECTS_LOADED:
      let newState = {};
      action.projects.forEach((project) => {
        newState[project.id] = project;
      });
      return newState;
    default:
      return state;
  }
};
