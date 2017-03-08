import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import './index.css';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './App'
import page1 from './page1'
import page2 from './page2'
import NazwaModulu from './Utils'
import BooksView from './books-view'


ReactDOM.render(
  (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="utils" component={NazwaModulu}/>
          <Route path="page1" component={page1}/>
          <Route path="page2" component={page2}/>
          <Route path="books" component={BooksView}/>
        </Route>
      </Router>
  ),
  document.getElementById('root')
);