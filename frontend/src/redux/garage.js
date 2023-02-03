import { dynamicFetch } from "./dynamicFetch.js";

const GARAGE_ADDED = "garage/GARAGE_ADDED";
const BLUEPRINT_ADDED = "garage/BLUEPRINT_ADDED";
const CATEGORY_ADDED = "garage/CATEGORY_ADDED";

const loadGarage = (garage) => ({
  type: GARAGE_ADDED,
  garage,
});

export const addBluePrint = (blueprint) => ({
  type: BLUEPRINT_ADDED,
  blueprint,
});

export const addCategory = (category) => ({
  type: CATEGORY_ADDED,
  category,
});

//------------------- blueprints thunk --------------

export const getUserBluePrints = (userId) => async (dispatch) => {
  const response = await fetch(`/api/garage/${userId}/blueprints`);
  if (!response.ok) throw response;

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
        name: action.garage.name,
        ...state,
      };

      let categories = [];
      let specs = [];

      action.garage.blueprints.forEach((blueprint) => {
        if (blueprint.categories.length > 0) {
          categories = [...categories, ...blueprint.categories];
        }
        delete blueprint.categories;
        garage.blueprints[blueprint.id] = blueprint;
      });

      console.log("categories ", categories);
      categories.forEach((category) => {
        if (category.specs.length > 0) {
          specs = [...specs, ...category.specs];
        }
        delete category.specs;
        garage.categories[category.id] = category;
      });

      specs.forEach((spec) => {
        if (spec) {
          garage.specs[spec.id] = spec;
        }
      });

      return garage;

    case BLUEPRINT_ADDED:
      let newState = { ...state, ...state.blueprints };
      newState.blueprints[action.blueprint.id] = action.blueprint;
      return newState;

    case CATEGORY_ADDED:
      const categoryState = {
        ...state,
        [state.categories]: {
          ...state,
          ...state.categories,
          [action.category.id]: action.category,
        },
      };

      return categoryState;

    default:
      return state;
  }
};

export default garageReducer;
