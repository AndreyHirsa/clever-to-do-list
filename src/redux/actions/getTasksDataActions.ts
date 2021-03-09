import { IGetDataFailure, ITodo, TasksDataActionTypes } from '../../interfaces/ITodo';
import { IUserData } from '../../interfaces/IUserData';
import { GET_DATA, GET_DATA_FAILURE, GET_DATA_SUCCESS } from './constants';

export const getData = (data:IUserData):TasksDataActionTypes => ({
  type: GET_DATA,
  payload: data,
});

export const getDataSuccess = (data:ITodo[]):TasksDataActionTypes => ({
  type: GET_DATA_SUCCESS,
  payload: data,
});

export const getDataFailure = (error:IGetDataFailure['payload']): TasksDataActionTypes => ({
  type: GET_DATA_FAILURE,
  payload: error,
});
