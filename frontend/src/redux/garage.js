import { csrfFetch } from "./csrf";

const GARAGE_ADDED = "garage/GARAGE_ADDED";
const BLUEPRINT_ADDED = "garage/BLUEPRINT_ADDED";

const loadBluePrints = (blueprints) => ({
  type: BLUEPRINT_ADDED,
  blueprints,
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
  console.log(garage);
  dispatch(loadGarage(garage));
  return response;
};

const initialState = {
  blueprints: {},
};

const garageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GARAGE_ADDED:
      let garage = { id: action.garage.id, name: action.garage.name };
      let blueprints = {};
      action.garage.blueprints.forEach((blueprint) => {
        blueprints[blueprint.id] = blueprint;
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
