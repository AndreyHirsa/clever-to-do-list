import {GET_DATA_SUCCESS} from "../actions/constants";

const tasksInitialState:any=[]

export const tasksDataReducer=(state:any=tasksInitialState,action:any):any=>{
    switch (action.type) {
        case GET_DATA_SUCCESS:
            return action.payload
        default:
            return state
    }
}