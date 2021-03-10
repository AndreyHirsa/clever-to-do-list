import {
  ILogIn, ILogInFailure, ILogInSuccess, UserStateActionsType,
} from 'interfaces/IUserStateActions';
import {
  LOG_IN_SUCCESS, LOG_IN, LOG_OUT, LOG_IN_FAILURE,
} from './constants';

export const logInSuccess = (
  user: ILogInSuccess['payload'],
): UserStateActionsType => ({
  type: LOG_IN_SUCCESS,
  payload: user,
});

export const logIn = (
  email: ILogIn['payload']['email'],
  password: ILogIn['payload']['password'],
): UserStateActionsType => ({
  type: LOG_IN,
  payload: {
    email,
    password,
  },
});

export const logOut = (): UserStateActionsType => ({
  type: LOG_OUT,
  payload: null,
});

export const logInFailure = (error:ILogInFailure['payload']):UserStateActionsType => ({
  type: LOG_IN_FAILURE,
  payload: error,
});
