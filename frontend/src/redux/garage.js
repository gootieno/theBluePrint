import { csrfFetch } from "./csrf";

const GARAGE_ADDED = "garage/GARAGE_ADDED";
const BLUEPRINT_ADDED = "garage/BLUEPRINT_ADDED";

const loadBluePrint = (blueprint) => ({
  type: BLUEPRINT_ADDED,
  blueprint,
});

const loadGarage = (garage) => ({
  type: GARAGE_ADDED,
  garage,
});

//------------------- blueprints thunk --------------

export const getUserBluePrints = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/garage/${userId}/blueprints`);
  if (!response) throw response;

  const { garage } = await response.json();
  dispatch(loadGarage(garage));
  return response;
};

const initialState = {
  blueprints: {},
  categories: {},
  specs: {},
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
    default:
      return state;
  }
};

export default garageReducer;
