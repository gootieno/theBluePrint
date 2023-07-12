import {
  BLUEPRINT_ADDED,
  BLUEPRINT_EDITED,
  BLUEPRINT_DELETED,
} from "./actions/blueprintActions";

const initialState = {};
const blueprintReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case BLUEPRINT_ADDED:
      newState = { ...state };
      newState = action.blueprint;
      return newState;
    case BLUEPRINT_EDITED:
      newState = { ...state };
      newState[action.blueprint.id] = action.blueprint;
      return newState;
    case BLUEPRINT_DELETED:
      newState = { ...state };
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default blueprintReducer;
