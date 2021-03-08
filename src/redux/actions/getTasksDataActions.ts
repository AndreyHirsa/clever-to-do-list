import { GET_DATA, GET_DATA_FAILURE, GET_DATA_SUCCESS } from './constants';

export const getData = (data:any) => ({
  type: GET_DATA,
  payload: data,
});

export const getDataSuccess = (data:any) => ({
  type: GET_DATA_SUCCESS,
  payload: data,
});

export const getDataFailure = (error:string) => ({
  type: GET_DATA_FAILURE,
  payload: error,
});
