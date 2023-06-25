import { GARAGE_ADDED } from "./actions/garageActions";

const initialState = {};

const garageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GARAGE_ADDED:
      return { ...initialState };
    default:
      return state;
  }
};

export default garageReducer;
