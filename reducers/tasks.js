import { FETCH_TASK_LIST, TASK_REQUEST } from '../actions/tasks';

const initialState =  {
  isFetching: false,,
  tasks: {},
  error: null
};

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case TASK_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_TASK_LIST:
      return {
        ...state,
        isFetching: false,
        tasks: action.payload,
        error: null
      }
    default:
      return state;
  }
}
