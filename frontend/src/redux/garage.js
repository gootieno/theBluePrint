import { addGarage, GARAGE_ADDED } from "./actions/garageActions";
import { addBlueprints } from "./actions/blueprintActions";
import { setCurrentBlueprint } from "./actions/blueprintActions";
import {
  getCookieFromStorage,
  BP_COOKIE,
  RESET_STORE,
} from "./utils/authUtils";
import { addCategories } from "./actions/categoryActions";
import { addSpecs } from "./actions/specActions";

export const loadGarage = (garageId) => async (dispatch) => {
  const token = getCookieFromStorage(BP_COOKIE);

  const response = await fetch(`/api/garage/${garageId}`, {
    headers: { "X-CSRF-TOKEN": `${token}` },
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(addGarage(data.garage));
    dispatch(addBlueprints(data.blueprints));
    dispatch(setCurrentBlueprint(0));
    dispatch(addCategories(data.categories));
    dispatch(addSpecs(data.specs));
    return response;
  }
};

const initialState = {};

const garageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GARAGE_ADDED:
      let newState = { ...state };
      newState = action.garage;
      return newState;

    case RESET_STORE:
      return initialState;
    default:
      return state;
  }
};

export default garageReducer;
