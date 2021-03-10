import {
  IGetData,
  IGetDataFailure, IGetDataSuccess, TasksDataActionTypes,
} from 'interfaces/ITodo';
import { GET_DATA, GET_DATA_FAILURE, GET_DATA_SUCCESS } from './constants';

export const getData = (data:IGetData['payload']):TasksDataActionTypes => ({
  type: GET_DATA,
  payload: data,
});

export const getDataSuccess = (data:IGetDataSuccess['payload']):TasksDataActionTypes => ({
  type: GET_DATA_SUCCESS,
  payload: data,
});

export const getDataFailure = (error:IGetDataFailure['payload']): TasksDataActionTypes => ({
  type: GET_DATA_FAILURE,
  payload: error,
});
