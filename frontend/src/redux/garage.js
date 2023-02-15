const GARAGE_ADDED = "garage/GARAGE_ADDED";
const BLUEPRINT_ADDED = "garage/BLUEPRINT_ADDED";
const CATEGORY_ADDED = "garage/CATEGORY_ADDED";
const CATEGORY_UPDATED = "garage/CATEGORY_UPDATED";
const CATEGORY_DELETED = "garage/CATEGORY_DELETED";
const SPEC_ADDED = "garage/SPEC_ADDED";
const SPEC_UPDATED = "garage/SPEC_UPDATED";
const SPEC_DELETED = "garage/SPEC_DELETED";

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

export const updatedCategory = (category) => ({
  type: CATEGORY_UPDATED,
  category,
});

export const deleteCategory = (categoryId) => ({
  type: CATEGORY_DELETED,
  categoryId,
});

export const addSpec = (spec) => ({
  type: SPEC_ADDED,
  spec,
});

export const updateSpec = (spec) => ({
  type: SPEC_UPDATED,
  spec,
});

export const deleteSpec = (specId) => ({
  type: SPEC_DELETED,
  specId,
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
  let categoryState = { ...state.categories };
  let specState = { ...state.specs };
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
      categoryState[action.category.id] = action.category;

      return {
        ...state,
        categories: { ...state.categories, ...categoryState },
      };
    case CATEGORY_UPDATED:
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.category.id]: action.category,
        },
      };

    case CATEGORY_DELETED:
      delete categoryState[action.categoryId];
      return {
        ...state,
        categories: {
          ...categoryState,
        },
      };

    case SPEC_ADDED:
      return {
        ...state,
        specs: { ...state.specs, [action.spec.id]: action.spec },
      };

    case SPEC_UPDATED:
      return {
        ...state,
        specs: { ...state.specs, [action.spec.id]: action.spec },
      };

    case SPEC_DELETED:
      delete specState[action.specId];
      return {
        ...state,
        specs: { ...specState },
      };
    default:
      return state;
  }
};

export default garageReducer;
