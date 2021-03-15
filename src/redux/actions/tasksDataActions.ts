import {
    IGetData,
    IGetDataFailure,
    IGetDataSuccess,
    IPatchData,
    ISaveData,
    TasksDataActionTypes,
} from 'interfaces/ITasksDataReducer';
import {
    GET_DATA,
    GET_DATA_FAILURE,
    GET_DATA_SUCCESS,
    PATCH_DATA,
    PATCH_DATA_FAILURE,
    PATCH_DATA_SUCCESS,
    SAVE_DATA,
} from './constants';

export const getData = (data: IGetData['payload']): TasksDataActionTypes => ({
    type: GET_DATA,
    payload: data,
});

export const getDataSuccess = (
    data: IGetDataSuccess['payload']
): TasksDataActionTypes => ({
    type: GET_DATA_SUCCESS,
    payload: data,
});

export const getDataFailure = (
    data: IGetDataFailure['payload']
): TasksDataActionTypes => ({
    type: GET_DATA_FAILURE,
    payload: data,
});

export const patchDataSuccess = (): TasksDataActionTypes => ({
    type: PATCH_DATA_SUCCESS,
    payload: {
        hasError: false,
    },
});

export const patchData = (
    data: IPatchData['payload']
): TasksDataActionTypes => ({
    type: PATCH_DATA,
    payload: data,
});

export const patchDataFailure = (): TasksDataActionTypes => ({
    type: PATCH_DATA_FAILURE,
    payload: {
        hasError: true,
    },
});

export const saveData = (data: ISaveData['payload']): TasksDataActionTypes => ({
    type: SAVE_DATA,
    payload: data,
});

export const saveDataSuccess = (): TasksDataActionTypes => ({
    type: PATCH_DATA_SUCCESS,
    payload: {
        hasError: false,
    },
});

export const saveDataFailure = (): TasksDataActionTypes => ({
    type: PATCH_DATA_FAILURE,
    payload: {
        hasError: true,
    },
});
