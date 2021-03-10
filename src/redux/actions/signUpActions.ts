import { ISignUp, ISignUpFailure, SignUpActionsType } from 'interfaces/ISignUpActions';
import { SIGN_UP, SIGN_UP_FAILURE, SIGN_UP_SUCCESS } from './constants';

export const signUp = (
  email: ISignUp['payload']['email'],
  password: ISignUp['payload']['password'],
): SignUpActionsType => ({
  type: SIGN_UP,
  payload: {
    email,
    password,
  },
});

export const signUpSuccess = (): SignUpActionsType => ({
  type: SIGN_UP_SUCCESS,
  payload: true,
});

export const signUpFailure = (error:ISignUpFailure['payload']): SignUpActionsType => ({
  type: SIGN_UP_FAILURE,
  payload: error,
});
