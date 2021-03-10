import {
  call,
  CallEffect,
  ForkEffect,
  put,
  PutEffect,
  takeEvery,
} from 'redux-saga/effects';
import { ISignUp, SignUpActionsType } from 'interfaces/ISignUpActions';
import { ILogIn, UserStateActionsType } from 'interfaces/IUserStateActions';
import { rsf } from 'services/firebaseService';
import {
  LOG_IN, SIGN_UP,
} from 'redux/actions/constants';
import { logInFailure, logInSuccess } from 'redux/actions/userStateActions';
import { Color } from '@material-ui/lab';
import { setSignUpStatus } from '../actions/signUpActions';

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
    yield put(setSignUpStatus({
      isSignedUp: true,
      message: {
        type: 'success',
        value: 'You have successfully registered',
      },
    }));
  } catch (error) {
    yield put(setSignUpStatus({
      isSignedUp: false,
      message: {
        type: 'error',
        value: error.message,
      },
    }));
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
