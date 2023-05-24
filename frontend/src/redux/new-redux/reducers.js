import { combineReducers } from "redux";
import userReducer from "./users";
import garageReducer from "./garage";
import categoryReducer from "./categories";
import specReducer from "./specs";

export default combineReducers({
  user: userReducer,
  garage: garageReducer,
  categories: categoryReducer,
  specs: specReducer,
});
