import { combineReducers } from "redux";
import userReducer from './users'
import garageReducer from "./garage";

export default combineReducers({
    user: userReducer,
    garage: garageReducer
})