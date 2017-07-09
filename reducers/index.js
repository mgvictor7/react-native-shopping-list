import { combineReducers } from 'redux';
import AuthReducer from './auth';
import TaskReducer from './tasks';

const rootReducer = combineReducers({
  auth: AuthReducer,
  tasks: TaskReducer,
});

export default rootReducer;
