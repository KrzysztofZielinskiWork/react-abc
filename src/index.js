import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import NazwaModulu from "./Utils";

var App = require('./App');
ReactDOM.render(
  React.createElement(
    'div',
    {},
    'Hello!!',
    React.createElement(App),
    React.createElement(NazwaModulu)
  ),
  document.getElementById('root')
)