import * as actionTypes from "../actions/types";

const initialState = [];

/* tutorials = initialState below is the same as state = initialState, it can be named freely but by convention you'll see it more as state. */
function tutorialReducer(tutorials = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.CREATE_TUTORIAL:
      return [...tutorials, payload];
    case actionTypes.RETRIEVE_TUTORIALS:
      return payload;
    case actionTypes.UPDATE_TUTORIAL:
      return tutorials.map((tutorial) => {
        if (tutorial.id === payload.id) {
          return {
            ...tutorial,
            ...payload,
          };
        } else {
          return tutorial;
        }
      });
    case actionTypes.DELETE_TUTORIAL:
      return tutorials.filter(({ id }) => id !== payload.id);
    case actionTypes.DELETE_ALL_TUTORIALS:
      return [];
    default:
      return tutorials;
  }
}

export default tutorialReducer;
