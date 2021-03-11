import {
  RESET_MESSAGE,
  SET_SIGN_UP_STATUS,
  SIGN_UP,
} from 'redux/actions/constants';
import { Color } from '@material-ui/lab';

export interface ISignUp {
    type: typeof SIGN_UP;
    payload: {
      email: string;
      password: string;
    };
  }

export interface ISignUpInitialState{
    isSignedUp:boolean;
    message:{
        type:Color | undefined
        value:string | null
    }
}

export interface ISetSignUpStatus {
    type: typeof SET_SIGN_UP_STATUS;
    payload: ISignUpInitialState
}

export interface IResetMessage {
    type: typeof RESET_MESSAGE;
    payload:{
      type:Color | undefined
      value:string | null
}
}

export type SignUpActionsType = ISetSignUpStatus | ISignUp | IResetMessage;
