import { ITasksDataInitialState, TasksDataActionTypes } from 'interfaces/ITodo';
import {
  GET_DATA, GET_DATA_FAILURE, GET_DATA_SUCCESS, PATCH_DATA_FAILURE, PATCH_DATA_SUCCESS, SAVE_DATA_FAILURE, SAVE_DATA_SUCCESS,
} from 'redux/actions/constants';

const tasksInitialState:ITasksDataInitialState = { data: [], isFetching: false, hasError: false };

export const tasksDataReducer = (state = tasksInitialState, action:TasksDataActionTypes)
 :ITasksDataInitialState => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, isFetching: true };
    case GET_DATA_SUCCESS:
      return { ...state, data: action.payload, isFetching: false };
    case GET_DATA_FAILURE:
      return { ...state, data: action.payload, isFetching: false };
    case PATCH_DATA_SUCCESS:
      return { ...state, ...action.payload };
    case PATCH_DATA_FAILURE:
      return { ...state, ...action.payload };
    case SAVE_DATA_SUCCESS:
      return { ...state, ...action.payload };
    case SAVE_DATA_FAILURE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
