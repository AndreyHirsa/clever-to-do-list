import { ISetSignUpStatus, ISignUp, SignUpActionsType } from 'interfaces/ISignUpReducer';
import { RESET_MESSAGE, SET_SIGN_UP_STATUS, SIGN_UP } from './constants';

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

export const resetMessage = ():SignUpActionsType => ({
  type: RESET_MESSAGE,
  payload: {
    type: undefined,
    value: null,
  },
});

export const setSignUpStatus = (data:ISetSignUpStatus['payload']):SignUpActionsType => ({
  type: SET_SIGN_UP_STATUS,
  payload: data,
});
