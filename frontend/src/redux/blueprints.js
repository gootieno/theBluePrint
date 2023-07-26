import {
  BLUEPRINTS_ADDED,
  BLUEPRINT_EDITED,
  BLUEPRINT_DELETED,
  CURRENT_BLUEPRINT_SET,
} from "./actions/blueprintActions";
import { RESET_STORE } from "./utils/authUtils";

const initialState = { currentBlueprint: null };
const blueprintReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case BLUEPRINTS_ADDED:
      newState = {
        ...state,
        ...action.blueprints,
        ["currentBlueprint"]: Object.values(action.blueprints)[0],
      };
      return newState;
    case BLUEPRINT_EDITED:
      newState = { ...state };
      newState[action.blueprint.id] = action.blueprint;
      return newState;
    case BLUEPRINT_DELETED:
      newState = { ...state };
      delete newState[action.id];
      if (newState.currentBlueprint[action.id])
        newState.currentBlueprint = newState.blueprints[0];
      return newState;
    case CURRENT_BLUEPRINT_SET:
      newState = { ...state };
      newState.currentBlueprint = action.blueprint;
      return newState;
    case RESET_STORE:
      return initialState;
    default:
      return state;
  }
};

export default blueprintReducer;
