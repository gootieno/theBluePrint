import {
  CATEGORY_ADDED,
  CATEGORIES_ADDED,
  CATEGORY_DELETED,
  CATEGORY_EDITED,
} from "./actions/categoryActions";

const initialState = {};
const categoriesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case CATEGORIES_ADDED:
      newState = action.categories;
      return newState;
    case CATEGORY_ADDED:
      return { ...state, [action.category.id]: action.category };
    case CATEGORY_EDITED:
      return { ...state, [action.category.id]: action.category };
    case CATEGORY_DELETED:
      newState = { ...state };
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default categoriesReducer;
