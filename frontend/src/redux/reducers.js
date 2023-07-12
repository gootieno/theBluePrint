import { combineReducers } from "redux";
import userReducer from "./users";
import garageReducer from "./garage";
import blueprintReducer from "./blueprint";

export default combineReducers({
  user: userReducer,
  garage: garageReducer,
  blueprints: blueprintReducer,
});
