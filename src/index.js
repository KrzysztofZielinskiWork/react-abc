import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';


import App from './App'
import page1 from './components/page1'
import page2 from './components/page2'
import NazwaModulu from './components/Utils'
import BooksView from './components/books-view'


ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="utils" component={NazwaModulu}/>
          <Route path="page1" component={page1}/>
          <Route path="page2" component={page2}/>
          <Route path="books" component={BooksView}/>
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
);