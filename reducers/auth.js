import { AUTH_USER_REQUEST, AUTH_USER, SIGN_OUT_USER, AUTH_ERROR } from '../actions/auth';

const initialState =  {
  isFetching: false,
  authenticated: false,
  user: null,
  error: null
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case AUTH_USER:
      return {
        ...state,
        isFetching: false,
        authenticated: true,
        user: action.payload.user,
        error: null
      };
    case SIGN_OUT_USER:
      return {
        ...state,
        isFetching: false,
        authenticated: false,
        user: null,
        error: null
      };
    case AUTH_ERROR:
      return {
        ...state,
        isFetching: false,
        user: null,
        error: action.payload.message
      };
    default:
      return state;
  }
}
