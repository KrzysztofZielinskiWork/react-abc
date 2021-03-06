// action type
const FETCH = 'books/FETCH';

// action creator
export const fetchSuccess = () => {
  // we return thunk;
  // thunk will get one call argument from redux-thunk;
  // the argument will be a dispatch method of store;
  return function (dispatch) {
    return fetch(
      process.env.PUBLIC_URL + '/data/books.js',

      books => dispatch({ type: FETCH, data: books })
    )
  }
};

// initial state
const initialState = {
  values: null
};

// reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        values: action.data
      };
    default:
      return state
  }
}