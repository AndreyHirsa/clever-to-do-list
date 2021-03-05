import { SAVE_DATA } from "./constants"

export const saveData=(data:any)=>{
    return{
        type:SAVE_DATA,
        payload:data
    }
}