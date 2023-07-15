import {
  BLUEPRINTS_ADDED,
  BLUEPRINT_EDITED,
  BLUEPRINT_DELETED,
} from "./actions/blueprintActions";
import { RESET_STORE } from "./utils/authUtils";

const initialState = {};
const blueprintReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case BLUEPRINTS_ADDED:
      newState = action.blueprints;
      return newState;
    case BLUEPRINT_EDITED:
      newState = { ...state };
      newState[action.blueprint.id] = action.blueprint;
      return newState;
    case BLUEPRINT_DELETED:
      newState = { ...state };
      delete newState[action.id];
      return newState;
    case RESET_STORE:
      return initialState;
    default:
      return state;
  }
};

export default blueprintReducer;
