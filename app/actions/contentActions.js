import * as types from './actionTypes';

import firebase, { firebaseRef } from '../api/firebaseAPI';
import { normalize, schema } from 'normalizr';

//loadBooks actionCreators
export const loadBooks = () => {
  return (dispatch) => {
    dispatch({type: types.LOAD_BOOKS_REQUEST});
    const booksRef = firebaseRef.child('books/');

    return booksRef.once('value')
      .then((snapshot) => {
        let books = snapshot.val() || {};
        let parsedBooks = [];
        Object.keys(books).map((bookId) => {
          parsedBooks.push({
            id: bookId,
            ...books[bookId]
          });
        });

        const booksSchema = new schema.Entity('books');
        const booksListSchema = new schema.Array(booksSchema);
        const normalizedBooks = normalize(parsedBooks, booksListSchema);

        console.log(normalizedBooks);

        let totalCount = parsedBooks ? parsedBooks.length : 0;
        dispatch(loadBooksSuccess(normalizedBooks, totalCount));
      })
      .catch((error) => {
        let errorMessage = error.message;
        console.error('Load books error', errorMessage);
        dispatch(loadBooksFailure(errorMessage));
      });
  };
};

export const loadBooksSuccess = (books, totalCount) => {
  return {
    type: types.LOAD_BOOKS_SUCCESS,
    books,
    totalCount
  };
};

export const loadBooksFailure = (errorMessage) => {
  return {
    type: types.LOAD_BOOKS_FAILURE,
    errorMessage
  };
};

//loadBook actionCreators
export const loadBook = (id) => {
  return (dispatch) => {
    dispatch({type: types.LOAD_BOOK_REQUEST});
    const booksRef = firebaseRef.child(`books/${id}`);

    return booksRef.once('value')
      .then((snapshot) => {
        let book = snapshot.val() || {};
        dispatch(loadBookSuccess(book));
      })
      .catch((error) => {
        let errorMessage = error.message;
        console.error('Load book error', errorMessage);
        dispatch(loadBookFailure(errorMessage));
      });
  };
};

export const loadBookSuccess = (book) => {
  return {
    type: types.LOAD_BOOK_SUCCESS,
    book
  };
};

export const loadBookFailure = (errorMessage) => {
  return {
    type: types.LOAD_BOOK_FAILURE,
    errorMessage
  };
};

//loadFavoriteBooks actionCreators
export const loadFavoriteBooks = () => {
  return (dispatch, getState) => {
    dispatch({type: types.LOAD_FAVORITE_BOOKS_REQUEST});
    const userUid = getState().auth.currentUser.uid;
    let favoriteRef = firebaseRef.child(`users/${userUid}/favorite`);

    return favoriteRef.on('value', snapshot => {
      let books = snapshot.val() || {};
      let parsedBooks = [];
      Object.keys(books).map((bookId) => {
        parsedBooks.push({
          id: bookId,
          ...books[bookId]
        });
      });

      const favoriteBooksSchema = new schema.Entity('books');
      const favoriteBooksListSchema = new schema.Array(favoriteBooksSchema);
      const normalizedFavoriteBooks = normalize(parsedBooks, favoriteBooksListSchema);

      console.log(normalizedFavoriteBooks);

      let totalCount = parsedBooks ? parsedBooks.length : 0;
      dispatch(loadFavoriteBooksSuccess(normalizedFavoriteBooks, totalCount));
    });
  };
};

export const loadFavoriteBooksSuccess = (books, totalCount) => {
  return {
    type: types.LOAD_FAVORITE_BOOKS_SUCCESS,
    books,
    totalCount
  };
};

//favoriteBook and unfavoriteBook actionCreators
export const favoriteBook = (selectedBook) => {
  return (dispatch, getState) => {
    const userUid = getState().auth.currentUser.uid;
    const bookId = selectedBook.id;

    return firebaseRef.child(`users/${userUid}/favorite`).update({
      [bookId]: selectedBook
    });
  };
};

export const unfavoriteBook = (selectedBook) => {
  return (dispatch, getState) => {
    const userUid = getState().auth.currentUser.uid;
    const bookId = selectedBook.id;

    return firebaseRef.child(`users/${userUid}/favorite/${bookId}`).remove();
  };
};
