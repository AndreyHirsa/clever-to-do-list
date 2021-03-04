import {GET_DATA, GET_DATA_FAILURE, GET_DATA_SUCCESS} from "./constants";

export const getData=(data:any)=>{
    return {
        type:GET_DATA,
        payload:data,
    }
}

export const getDataSuccess=(data:any)=>{
    return{
        type:GET_DATA_SUCCESS,
        payload:data
    }
}

export const getDataFailure=(error:string)=>{
    return{
        type:GET_DATA_FAILURE,
        payload:error
    }
}