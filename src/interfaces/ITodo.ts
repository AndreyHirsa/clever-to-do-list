import { GET_DATA, GET_DATA_FAILURE, GET_DATA_SUCCESS } from "../redux/actions/constants";
import { IUserData } from "./IUserData";

export interface ITodo{
    value:string,
    id:string,
    done:boolean
}

export interface IGetData{
    type:typeof GET_DATA,
    payload:IUserData
}

export interface IGetDataSuccess{
    type:typeof GET_DATA_SUCCESS,
    payload:ITodo[]
}

export interface IGetDataFailure{
    type: typeof GET_DATA_FAILURE,
    payload:string
}

export type TasksDataActionTypes=IGetDataSuccess | IGetData | IGetDataFailure