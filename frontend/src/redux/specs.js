import {
  SPECS_ADDED,
  SPECS_DELETED,
  SPECS_EDITED,
  SPEC_ADDED,
} from "./actions/specActions";

const initialState = {};

export const specsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SPECS_ADDED:
      newState = action.specs;
      return newState;
    case SPEC_ADDED:
      newState = { ...state };
      newState[action.spec.id] = action.id;
      return newState;
    case SPECS_EDITED:
      newState = { ...state };
      newState[action.spec.id] = action.spec;
      return newState;
    case SPECS_DELETED:
      newState = { ...state };
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default specsReducer;
