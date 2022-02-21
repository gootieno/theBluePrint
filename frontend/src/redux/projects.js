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
  }
};

let initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROJECTS_LOADED:
      let newState = { ...state };
      action.projects.forEach((project) => {
        newState[project.id] = project;
      });

      let nextState = {
        ...state,
        [action.project]: {
          ...state[action.project],
          id: action.project,
          count: 1,
        },
      };
      return newState;
    default:
      return state;
  }
};
