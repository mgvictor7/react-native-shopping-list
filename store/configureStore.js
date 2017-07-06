import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers';
import { verifyAuth } from '../actions/auth';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose (
      applyMiddleware(reduxThunk)
    )
  );
  store.dispatch(verifyAuth());

  return store;
}
