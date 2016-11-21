import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import BooksPage from './components/BooksPage/BooksPage';
import BookDetailsPage from './components/BookDetailsPage';
import AboutPage from './components/AboutPage';
import LoginPage from './components/LoginPage';
import AccountPage from './components/AccountPage';
import FavouritePage from './components/FavouritePage';
import NotFountPage from './components/NotFoundPage';

import firebase from './api/firebaseAPI';

const requireAuth = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/login');
  }
  next();
};

export default (
  <div>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="books" component={BooksPage} onEnter={requireAuth}>
        <Route path=":id" components={{ content: BookDetailsPage }} />
      </Route>
      <Route path="about" component={AboutPage} />
      <Route path="login" component={LoginPage} />
      <Route path="profile" component={AccountPage} onEnter={requireAuth} />
      <Route path="favourite" component={FavouritePage} onEnter={requireAuth} />
    </Route>
    <Route path="*" component={NotFountPage} />
  </div>
);
