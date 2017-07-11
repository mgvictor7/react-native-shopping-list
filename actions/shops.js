import firebase from 'firebase';

export const FETCH_SHOP_LIST = 'FETCH_SHOP_LIST';

/** Shop list **/
export function fetchShopList() {
  return function(dispatch) {
    const shopsRef = firebase.database().ref('shops');
    shopsRef.on('value', (data) => {
      dispatch({
        type: FETCH_SHOP_LIST,
        payload: data.val()
      });
    });
  };
}
