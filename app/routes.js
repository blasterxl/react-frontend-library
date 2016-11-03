import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import BooksPage from './components/BooksPage';
import BooksGenrePage from './components/BooksGenrePage';
import BookDetailPage from './components/BookDetailPage';
import AboutPage from './components/AboutPage';
import LoginPage from './components/LoginPage';
import NotFountPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="books" component={BooksPage} />
    <Route path="books/:genre" component={BooksGenrePage}/>
    <Route path="books/:genre/:id" component={BookDetailPage}/>
    <Route path="about" component={AboutPage} />
    <Route path="login" component={LoginPage}/>
    <Route path="*" component={NotFountPage}/>
  </Route>
);
