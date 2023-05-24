const CATEGORY_ADDED = "categories/CATEGORY_ADDED";
const CATEGORY_UPDATED = "categories/CATEGORY_UPDATED";
const CATEGORY_DELETED = "categories/CATEGORY_DELETED";

const initialState = {};

export const addCategory = (category) => ({
  type: CATEGORY_ADDED,
  category,
});

export const updatedCategory = (category) => ({
  type: CATEGORY_UPDATED,
  category,
});

export const deleteCategory = (categoryId) => ({
  type: CATEGORY_DELETED,
  categoryId,
});

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_ADDED:
      return {
        ...state,
        [action.category.id]: action.category,
      };
    case CATEGORY_UPDATED:
      return {
        ...state,
        [action.category.id]: {
          ...state[action.category.id],
          ...action.category,
        },
      };
    case CATEGORY_DELETED:
      const newState = { ...state };
      delete newState[action.categoryId];
      return newState;
    default:
      return state;
  }
}
