import { FETCH_SHOP_LIST } from '../actions/shops';

const initialState =  {
  shops: {},
  error: null
};

export default function shops(state = initialState, action) {
  switch (action.type) {
    case FETCH_SHOP_LIST:
      return {
        ...state,
        shops: action.payload,
        error: null
      }
    default:
      return state;
  }
}
