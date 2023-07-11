import { addGarage, GARAGE_ADDED } from "./actions/garageActions";
import { getCookieFromStorage, BP_COOKIE } from "./utils/authUtils";

const token = getCookieFromStorage(BP_COOKIE);

export const loadGarage = (garageId) => async (dispatch) => {
  const response = await fetch(`/api/garage/${garageId}/blueprints`, {
    headers: { "X-CSRF-TOKEN": `${token}` },
  });

  if (response.ok) {
    const data = await response.json();
    console.log("garage after login ", data);
    dispatch(addGarage(data.garage));
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
    default:
      return state;
  }
};

export default garageReducer;
