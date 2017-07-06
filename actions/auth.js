import firebase from 'firebase';
import Config from '../config/config';

firebase.initializeApp(Config.firebaseConfig());

/**
 * User autentication
 */
export const AUTH_USER_REQUEST = 'AUTH_USER_REQUEST';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_USER = 'AUTH_USER';


/**
 * @param  {Object} credentials
 * @param  {String} credentials.email
 * @param  {String} credentials.password
 * @return {function}
 */
export function signInUser(credentials) {
  return function(dispatch) {
    dispatch(requestAuthUser());
    firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        dispatch(authUser());
      })
      .catch(error => {
        dispatch(authError(error));
      });
  }
}

export function signOutUser() {
  firebase.auth().signOut();
  return {
    type: SIGN_OUT_USER
  }
}

export function verifyAuth() {
  return function (dispatch) {
    dispatch(requestAuthUser());
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(authUser(user));
      } else {
        dispatch(signOutUser());
      }
    });
  }
}

function requestAuthUser() {
  return {
    type: AUTH_USER_REQUEST,
  }
}

function authUser(user) {
  return {
    type: AUTH_USER,
    payload: { user }
  }
}

function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
