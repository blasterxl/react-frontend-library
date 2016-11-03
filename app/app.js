import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { browserHistory } from 'react-router';

import App from './components/App';
import routes from './routes';

import configureStore from './store/configureStore';

const store = configureStore();

render(
  <Provider>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
