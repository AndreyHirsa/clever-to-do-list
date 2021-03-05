import { PATCH_DATA } from "./constants";

export const patchData=(data:any)=>{
    return{
        type:PATCH_DATA,
        payload:data
    }
}