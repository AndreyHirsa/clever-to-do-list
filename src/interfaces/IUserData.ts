import { PATCH_USER_DATA } from "../redux/actions/constants";

export interface IUserData{
     userId?:string,
     year?:string
     month?:string
     day?:string
     value?:string,
     taskId?:string,
     done?: boolean
}

export interface IPatchUserData{
     type: typeof PATCH_USER_DATA,
     payload:IUserData
}


export type UserDataActionsType = IPatchUserData