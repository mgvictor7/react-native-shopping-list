import { combineReducers } from 'redux';
import AuthReducer from './auth';
import TasksReducer from './tasks';
import ProductsReducer from './products';
import ShopsReducer from './shops';

const rootReducer = combineReducers({
  auth: AuthReducer,
  tasks: TasksReducer,
  products: ProductsReducer,
  shops: ShopsReducer,
});

export default rootReducer;
