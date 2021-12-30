import { csrfFetch } from "./csrf";

const GARAGE_ADDED = "garage/GARAGE_ADDED";
const BLUEPRINT_ADDED = "garage/BLUEPRINT_ADDED";
const PROJECTS_LOADED = "garage/PROJECTS_LOADED";

const loadGarage = (garage) => ({
  type: GARAGE_ADDED,
  garage,
});

const addBluePrint = (blueprint) => ({
  type: BLUEPRINT_ADDED,
  blueprint,
});

const loadProjects = (projects) => ({
  type: PROJECTS_LOADED,
  projects,
});

//------------------- blueprints thunk --------------

export const getUserBluePrints = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/garage/${userId}/blueprints`);
  if (!response.ok) throw response;

  const { garage } = await response.json();
  dispatch(loadGarage(garage));
  return response;
};

const initialState = {
  blueprints: {},
  categories: {},
  specs: {},
  projects: {},
  steps: {},
};

export const getBluePrintProjects = (blueprintId) => async (dispatch) => {
  const response = await csrfFetch(`/api/blueprints/${blueprintId}/projects`);
  if (!response.ok) throw response;

  const { projects } = await response.json();
  dispatch(loadProjects(projects));
};

const garageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GARAGE_ADDED:
      let garage = {
        id: action.garage.id,
        name: action.garage.name,
        categories: {},
        specs: {},
      };
      let blueprints = {};
      let categories = [];
      let specs = [];

      action.garage.blueprints.forEach((blueprint) => {
        blueprints[blueprint.id] = blueprint;
        if (blueprint.categories.length > 0) {
          categories = [...categories, ...blueprint.categories];
          delete blueprint.categories;
        }
      });

      categories.forEach((category) => {
        garage.categories[category.id] = category;
        if (category.specs.length > 0) {
          specs = [...specs, ...category.specs];
          delete category.specs;
        }
      });

      specs.forEach((spec) => {
        if (spec) {
          garage.specs[spec.id] = spec;
        }
      });

      return {
        ...garage,
        blueprints: { ...blueprints },
      };

    case BLUEPRINT_ADDED:
      let newState = { ...state, ...state.blueprints };
      newState.blueprints[action.blueprint.id] = action.blueprint;
      return newState;

    case PROJECTS_LOADED:
      let projectState = {
        projects: {},
        steps: {},
      };
      let steps = [];

      action.projects.forEach((project) => {
        projectState.projects[project.id] = project;
        if (project.steps.length > 0) {
          steps = [...steps, ...project.steps];
          delete project.steps;
        }
      });

      steps.forEach((step) => {
        if (step) {
          projectState.steps[step.id] = step;
        }
      });

      return {
        ...state,
        steps: { ...projectState.steps },
        projects: { ...projectState.projects },
      };
    default:
      return state;
  }
};

export default garageReducer;
