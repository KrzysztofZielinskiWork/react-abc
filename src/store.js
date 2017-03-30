import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'
// import persistState from 'redux-sessionstorage'

import booksReducer from './state/books'
import booksJSONReducer from './state/booksJSON'
import searchReducer from './state/search'


const reducer = combineReducers({
  abc: (state = {}, action = {}) => { switch (action.type) { default: return state } },
  StanZeStoru: searchReducer,
  books: booksReducer,
  // search: searchReducer ,
  booksJSON: booksJSONReducer,
  favoriteStudents: (state = {}, action = {}) => { switch (action.type) { default: return state } },
  // searchMovie: (state = {}, action = {}) => { switch (action.type) { default: return state } }

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  /* preloadedState, */
  composeEnhancers(
    persistState(['StanZeStoru']),
    applyMiddleware(thunk)
  )
);

export default store