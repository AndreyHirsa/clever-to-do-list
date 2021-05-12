import {
    DELETE_DATA,
    DELETE_DATA_FAILURE,
    DELETE_DATA_SUCCESS,
    GET_DATA,
    GET_DATA_FAILURE,
    GET_DATA_SUCCESS,
    PATCH_DATA,
    PATCH_DATA_FAILURE,
    PATCH_DATA_SUCCESS,
    SAVE_DATA,
    SAVE_DATA_FAILURE,
    SAVE_DATA_SUCCESS,
} from 'redux/actions/constants';
import { IUserDataReducer } from './IUserDataReducer';

export interface ITasksDataReducer {
  value: string;
  id: string;
  done: boolean;
}

export interface ITasksDataInitialState {
  data: ITasksDataReducer[];
  isFetching: boolean;
  hasError: boolean;
}

export interface IGetData {
  type: typeof GET_DATA;
  payload: IUserDataReducer;
}

export interface IGetDataSuccess {
  type: typeof GET_DATA_SUCCESS;
  payload: ITasksDataReducer[];
}

export interface IGetDataFailure {
  type: typeof GET_DATA_FAILURE;
  payload: [];
}

export interface IPatchData {
  type: typeof PATCH_DATA;
  payload: IUserDataReducer;
}

export interface IPatchDataSuccess {
  type: typeof PATCH_DATA_SUCCESS;
  payload: {
    hasError: false;
  };
}

export interface IPatchDataFailure {
  type: typeof PATCH_DATA_FAILURE;
  payload: {
    hasError: true;
  };
}

export interface IDeleteData {
    type: typeof DELETE_DATA;
    payload: IUserDataReducer;
}

export interface IDeleteDataSuccess {
    type: typeof DELETE_DATA_SUCCESS;
    payload: {
        hasError: false;
    };
}

export interface IDeleteDataFailure {
    type: typeof DELETE_DATA_FAILURE;
    payload: {
        hasError: true;
    };
}

export interface ISaveData {
  type: typeof SAVE_DATA;
  payload: IUserDataReducer;
}

export interface ISaveDataSuccess {
  type: typeof SAVE_DATA_SUCCESS;
  payload: {
    hasError: true;
  };
}

export interface ISaveDataFailure {
  type: typeof SAVE_DATA_FAILURE;
  payload: {
    hasError: true;
  };
}

export type TasksDataActionTypes =
  | IDeleteData
  | IDeleteDataSuccess
  | IDeleteDataFailure
  | IGetDataSuccess
  | IGetData
  | IGetDataFailure
  | IPatchData
  | IPatchDataSuccess
  | IPatchDataFailure
  | ISaveDataFailure
  | ISaveDataSuccess
  | ISaveData;
