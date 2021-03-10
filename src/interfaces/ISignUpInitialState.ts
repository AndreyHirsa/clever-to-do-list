import { Color } from '@material-ui/lab';

export interface ISignUpInitialState{
    isSignedUp:false | true;
    message:{
        type:Color | undefined
        value:string | null
    }
}
