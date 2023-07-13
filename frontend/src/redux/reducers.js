import { combineReducers } from "redux";
import userReducer from "./users";
import garageReducer from "./garage";
import blueprintReducer from "./blueprints";
import categoriesReducer from "./categories";
import specsReducer from "./specs";

export default combineReducers({
  user: userReducer,
  garage: garageReducer,
  blueprints: blueprintReducer,
  categories: categoriesReducer,
  specs: specsReducer,
});
