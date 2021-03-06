import * as types from './actionTypes';
import { loadBooks } from './contentActions';
import { hashHistory } from 'react-router';

import firebase,
  { firebaseRef, googleProvider, facebookProvider, githubProvider } from '../api/firebaseAPI';

//signInUser actionCreators
export const signInUserGoogle = () => {
  return (dispatch) => {
    dispatch({type: types.LOGIN_REQUEST});

    return firebase.auth().signInWithPopup(googleProvider)
      .then((response) => {
        let user = {
          uid: response.user.uid,
          name: response.user.displayName,
          photo: response.user.photoURL
        };
        console.log('Auth success');
        dispatch(authUser(user));
      })
      .catch((error) => {
        let errorMessage = error.message;
        console.error('Auth error', errorMessage);
        dispatch(authError(errorMessage));
      });
  };
};

export const signInUserFacebook = () => {
  return (dispatch) => {
    dispatch({type: types.LOGIN_REQUEST});

    return firebase.auth().signInWithPopup(facebookProvider)
      .then((response) => {
        let user = {
          uid: response.user.uid,
          name: response.user.displayName,
          photo: response.user.photoURL
        };
        console.log('Auth success');
        dispatch(authUser(user));
      })
      .catch((error) => {
        let errorMessage = error.message;
        console.error('Auth error', errorMessage);
        dispatch(authError(errorMessage));
      });
  };
};

export const signInUserGithub = () => {
  return (dispatch) => {
    dispatch({type: types.LOGIN_REQUEST});

    return firebase.auth().signInWithPopup(githubProvider)
      .then((response) => {
        let user = {
          uid: response.user.uid,
          name: response.user.displayName,
          photo: response.user.photoURL
        };
        console.log('Auth success');
        dispatch(authUser(user));
      })
      .catch((error) => {
        let errorMessage = error.message;
        console.error('Auth error', errorMessage);
        dispatch(authError(errorMessage));
      });
  };
};

export const authUser = (user) => {
  return {
    type: types.LOGIN_SUCCESS,
    user
  };
};

export const authError = (errorMessage) => {
  return {
    type: types.LOGIN_FAILURE,
    errorMessage
  };
};

export const verifyAuth = () => {
  return (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        let currentUser = {
          uid: user.uid,
          name: user.displayName,
          photo: user.photoURL
        };
        dispatch(authUser(currentUser));
        dispatch(loadBooks());
        hashHistory.replace('/books');
      } else {
        hashHistory.replace('/');
      }
    });
  }
}

//signOutUser actionCreators
export const signOutUser = () => {
  return (dispatch) => {
    dispatch({type: types.LOGOUT_REQUEST});

    return firebase.auth().signOut()
      .then(() => {
        console.log('Logout success');
        dispatch(logOutUser());
      })
      .catch((error) => {
        let errorMessage = error.message;
        console.error('Logout error', errorMessage);
        dispatch(logOutError(errorMessage));
      });
  };
};

export const logOutUser = () => {
  return {
    type: types.LOGOUT_SUCCESS,
  };
};

export const logOutError = (errorMessage) => {
  return {
    type: types.LOGOUT_FAILURE,
    errorMessage
  };
};
