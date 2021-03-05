import { ITodo } from "../../interfaces/ITodo";
import {GET_DATA_SUCCESS} from "../actions/constants";

const tasksInitialState:ITodo[]=[]

export const tasksDataReducer=(state:ITodo[]=tasksInitialState,action:any):ITodo[]=>{
    switch (action.type) {
        case GET_DATA_SUCCESS:
            return action.payload
        default:
            return state
    }
}
