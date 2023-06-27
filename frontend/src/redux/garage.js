import { addGarage, GARAGE_ADDED } from "./actions/garageActions";
import { getTokenFromStorage } from "./utils/authUtils";

const initialState = {};

export const loadGarage =
  ({ garageId }) =>
  async (dispatch) => {
    const token = getTokenFromStorage();
    const response = await fetch(`/api/garage/${garageId}/blueprints`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.ok) {
      const data = await response.json();
      console.log("garage after login ", data);
      dispatch(addGarage(data));
      return response
    }
  };

const garageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GARAGE_ADDED:
      return { ...initialState, garage: action.garage };
    default:
      return state;
  }
};

export default garageReducer;
