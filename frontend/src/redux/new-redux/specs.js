const SPEC_ADDED = "specs/SPEC_ADDED";
const SPEC_UPDATED = "specs/SPEC_UPDATED";
const SPEC_DELETED = "specs/SPEC_DELETED";

export const addSpec = (spec) => ({
  type: SPEC_ADDED,
  spec,
});

export const updateSpec = (spec) => ({
  type: SPEC_UPDATED,
  spec,
});

export const deleteSpec = (specId) => ({
  type: SPEC_DELETED,
  specId,
});


const initialState = {};

export default function specReducer(state = initialState, action) {
  switch (action.type) {
    case SPEC_ADDED:
      return {
        ...state,
        [action.spec.id]: action.spec,
      };
    case SPEC_UPDATED:
      return {
        ...state,
        [action.spec.id]: {
          ...state[action.spec.id],
          ...action.spec,
        },
      };
    case SPEC_DELETED:
      const newState = { ...state };
      delete newState[action.specId];
      return newState;
    default:
      return state;
  }
}