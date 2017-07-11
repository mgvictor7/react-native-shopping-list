import firebase from 'firebase';

export const FETCH_PRODUC_LIST = 'FETCH_PRODUC_LIST';

/** Product list **/
export function fetchProductList() {
  console.log('entra');
  return function(dispatch) {
    const productsRef = firebase.database().ref('products');
    productsRef.on('value', (data) => {
      dispatch({
        type: FETCH_PRODUC_LIST,
        payload: data.val()
      });
    });
  };
}
