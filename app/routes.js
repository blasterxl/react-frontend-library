import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import BooksPage from './components/BooksPage';
import BooksGenrePage from './components/BooksGenrePage';
import BookDetailsPage from './components/BookDetailsPage';
import AboutPage from './components/AboutPage';
import LoginPage from './components/LoginPage';
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
        <Route path="category/:category" components={{ content: BooksGenrePage }}>
          <Route path=":id" component={BookDetailsPage} />
        </Route>
      </Route>
      <Route path="about" component={AboutPage} />
      <Route path="login" component={LoginPage} />
    </Route>
    <Route path="*" component={NotFountPage} />
  </div>
);
