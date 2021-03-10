import { ITodo, TasksDataActionTypes } from 'interfaces/ITodo';
import { GET_DATA_SUCCESS } from 'redux/actions/constants';

const tasksInitialState:ITodo[] = [];

export const tasksDataReducer = (state = tasksInitialState, action:TasksDataActionTypes)
 :ITodo[] => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
