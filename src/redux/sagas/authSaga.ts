import {
  call,
  CallEffect,
  ForkEffect,
  put,
  PutEffect,
  takeEvery,
} from 'redux-saga/effects';
import { ISignUp, SignUpActionsType } from '../../interfaces/ISignUpActions';
import { ILogIn, UserStateActionsType } from '../../interfaces/IUserStateActions';
import { rsf } from '../../services/firebaseService';
import {
  GET_DATA, LOG_IN, PATCH_DATA, SIGN_UP,
} from '../actions/constants';
import { signUpFailure, signUpSuccess } from '../actions/signUpActions';
import { logInFailure, logInSuccess } from '../actions/userStateActions';

function* createUserSaga({
  payload,
}: ISignUp): Generator<
  | CallEffect<unknown>
  | PutEffect<SignUpActionsType>
  | PutEffect<any>,
  void,
  string
> {
  try {
    yield call(
      rsf.auth.createUserWithEmailAndPassword,
      payload.email,
      payload.password,
    );
    yield put(signUpSuccess());
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}

function* loginSaga({
  payload,
}: ILogIn): Generator<
  | CallEffect<unknown>
  | PutEffect<UserStateActionsType>
  | PutEffect<any>,
  void,
  Record<string, unknown>
> {
  try {
    const user = yield call(
      rsf.auth.signInWithEmailAndPassword,
      payload.email,
      payload.password,
    );
    yield put(logInSuccess(user));
  } catch (error) {
    yield put(logInFailure(error.message));
  }
}

export function* userAuthWatcher():Generator<ForkEffect<never>, void> {
  yield takeEvery(SIGN_UP, createUserSaga);
  yield takeEvery(LOG_IN, loginSaga);
}
