import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'

// import booksReducer from '../state/books'
import booksJSONReducer from '../state/booksJSON'


const reducer = combineReducers({
  // books: booksReducer,
  booksJSON: booksJSONReducer,
  favoriteStudents: (state = {}, action = {}) => { switch (action.type) { default: return state } }
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  /* preloadedState, */
  composeEnhancers(
    persistState(['counter']),
    applyMiddleware(thunk)
  )
);

export default store