import { FETCH_PRODUC_LIST } from '../actions/products';

const initialState =  {
  products: {},
  error: null
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUC_LIST:
      return {
        ...state,
        products: action.payload,
        error: null
      }
    default:
      return state;
  }
}
