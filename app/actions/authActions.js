import * as types from './actionTypes';

import firebase, { firebaseRef, googleProvider } from '../api/firebaseAPI';

export const startLogin = () => {
  return (dispatch) => {
    return firebase.auth().signInWithPopup(googleProvider)
      .then((result) => {
        let user = result.user;
        console.log('Auth success');
      })
      .catch((error) => {
        console.log('Auth error', error);
      });
  };
};

export const login = (user) => {
  return {
    type: types.LOGIN,
    user
  };
};

export const startLogout = () => {
  return (dispatch) => {
    return firebase.auth().signOut()
    .then(() => {
      console.log('Logout');
    }, (error) => {
      console.log(error);
    });
  };
};

export const logout = () => {
  return {
    type: types.LOGOUT
  };
};
