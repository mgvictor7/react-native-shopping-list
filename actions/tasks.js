import firebase from 'firebase';
import Config from '../config/config';
import { generateKey } from '../lib/utils';

// firebase.initializeApp(Config.firebaseConfig());

/**
 * User autentication
 */
export const TASK_REQUEST = 'AUTH_USER_REQUEST';
export const FETCH_TASK_LIST = 'FETCH_TASK_LIST';


function requestTask() {
  return {
    type: TASK_REQUEST,
  }
}

export function fetchTaskList() {
  return function(dispatch) {
    dispatch(requestTask());
    const tasksRef = firebase.database().ref('list');
    tasksRef.on('value', (data) => {
      dispatch({
        type: FETCH_TASK_LIST,
        payload: data.val()
      });
    });
  };
}

export function createTask(data) {
    const updates = {};
    const { product, shop, task } = data;

  // Añadir producto si no existe y obtener su key
  if (product._id === undefined) {
    product._id = generateKey('products');
    updates[`/products/${product._id}`] = {
      _id: product._id,
      name: product.name
    };
  }

  // Añadir tienda si no existe y obtener su key
  if (shop._id === undefined) {
    shop._id = generateKey('shops');
    updates[`/shops/${shop._id}`] = {
      _id: shop._id,
      name: shop.name
    };
  }

  const taskKey = generateKey('tasks');
  task._id = taskKey;
  task.productId = product._id;
  task.shopId = shop._id;

  updates[`/tasks/${taskKey}`] = task;

  return dispatch => firebase.database().ref().update(updates);
}

export function checkedTask(keyTask, status) {
  return dispatch => firebase.database().ref().update({
    [`tasks/${keyTask}/done`]: status
  });
}

export function deleteTask(keyTask) {
  return dispatch => firebase.database().ref(`tasks/${keyTask}`).remove();
}
