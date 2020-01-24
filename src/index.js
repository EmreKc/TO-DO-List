import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppReducer from './reducers';

import 'bootswatch/dist/flatly/bootstrap.min.css';

import './stylesheets/index.css';
import './stylesheets/animations.css';

import AppContainer from './containers/AppContainer';

const store = createStore(
  AppReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app'),
); 
