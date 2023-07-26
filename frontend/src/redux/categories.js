import {
  CATEGORY_ADDED,
  CATEGORIES_ADDED,
  CATEGORY_DELETED,
  CATEGORY_EDITED,
  CURRENT_CATEGORY_SET,
} from "./actions/categoryActions";
import { RESET_STORE } from "./utils/authUtils";

const initialState = { currentCategory: null };
const categoriesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case CATEGORIES_ADDED:
      newState = {
        ...state,
        ...action.categories,
        ["currentCategory"]: Object.values(action.categories)[0],
      };
      return newState;
    case CATEGORY_ADDED:
      return { ...state, [action.category.id]: action.category };
    case CATEGORY_EDITED:
      return { ...state, [action.category.id]: action.category };
    case CATEGORY_DELETED:
      newState = { ...state };
      delete newState[action.id];
      return newState;
    case CURRENT_CATEGORY_SET:
      newState = { ...state, ["currentCategory"]: action.category };
      return newState;
    case RESET_STORE:
      return initialState;
    default:
      return state;
  }
};

export default categoriesReducer;
