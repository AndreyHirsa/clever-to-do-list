import { LOG_IN, LOG_IN_FAILURE, LOG_IN_SUCCESS, LOG_OUT } from "../redux/actions/constants";

  export interface ILogInSuccess {
    type: typeof LOG_IN_SUCCESS;
    payload:Record<string, unknown>;
  }
  
  export interface ILogIn {
    type: typeof LOG_IN;
    payload: {
      email: string;
      password: string;
    };
  }
  
  export interface ILogOut {
    type: typeof LOG_OUT;
    payload: null;
  }

  export interface ILogInFailure{
    type:typeof LOG_IN_FAILURE;
    payload:string
}  

  
  export type UserStateActionsType = ILogInSuccess | ILogOut | ILogIn | ILogInFailure;