import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { hashHistory } from 'react-router';

import App from './components/App';
import routes from './routes';
import firebase from './api/firebaseAPI';
import * as actions from './actions/authActions';

import configureStore from './store/configureStore';

const store = configureStore();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user));
    hashHistory.push('/books');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
