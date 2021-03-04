import { SIGN_UP, SIGN_UP_FAILURE, SIGN_UP_SUCCESS } from "../redux/actions/constants";

export interface ISignUp {
    type: typeof SIGN_UP;
    payload: {
      email: string;
      password: string;
    };
  }
  
  export interface ISignUpSuccess {
    type: typeof SIGN_UP_SUCCESS;
    payload:true;
  }
  
  export interface ISignUpFailure {
    type: typeof SIGN_UP_FAILURE
    payload:null | string;
}
  
    export type SignUpActionsType = ISignUpSuccess | ISignUpFailure | ISignUp;