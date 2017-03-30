const FETCH__BEGIN = 'search/FETCH__BEGIN';
const FETCH__SUCCESS = 'pomocnik/FETCH__SUCCESS';
const FETCH__FAIL = 'search/FETCH__FAILED';

export const searchFetch = (title2) => dispatch => {
console.log(title2 + 'ggg');
  dispatch({type: FETCH__BEGIN});
  return fetch(
    'http://www.omdbapi.com/?t='+title2,
  ).then(
    response => {
      if (response.ok) {
        return response.json().catch(
          error => dispatch({
            type: FETCH__FAIL,
            error: 'Malformed JSON response'
          })
        )
      }
      throw new Error('Connection error')
    }
  ).then(
    data => dispatch({
      type: FETCH__SUCCESS,
      data
    })
  ).catch(
    error => dispatch({
      type: FETCH__FAIL,
      error: error.message
    })
  )
};

const initialState = {
  data: [],
  fetching: false,
  error: null,
  title2: 'empty'
};


//reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH__BEGIN:
      return {
        ...state,
        fetching: true,
        error: null
      };
    case FETCH__SUCCESS:
      return {
        ...state,
        data: action.data,
        fetching: false
      };
    case FETCH__FAIL:
      return {
        ...state,
        fetching: false,
        error: action.error
      };
    default:
      return state
  }
}