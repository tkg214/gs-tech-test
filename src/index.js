import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './index.css';
const appRoot = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, appRoot
);