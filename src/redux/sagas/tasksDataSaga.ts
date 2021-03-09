import {
  call,
  CallEffect,
  ForkEffect,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import {
  GET_DATA, PATCH_DATA, PATCH_USER_DATA, SAVE_DATA,
} from '../actions/constants';
import { firebaseService, rsf } from '../../services/firebaseService';
import { getData, getDataSuccess } from '../actions/getTasksDataActions';
import { IUserData } from '../../interfaces/IUserData';
import { TasksDataActionTypes } from '../../interfaces/ITodo';

function* getDataSaga({
  payload: {
    userId, year, month, day,
  },
}:any): any {
  try {
    const data = yield call(rsf.database.read, `${userId}/${year}/${month}/${day}/`);

    yield put(getDataSuccess(Object.keys(data).map((key) => data[key])));
  } catch {
    yield put(getDataSuccess([]));
  }
}

function* patchDataSaga({
  payload: {
    userId, taskId, year, month, day, done,
  },
}:any):any {
  try {
    yield call(rsf.database.patch, `${userId}/${year}/${month}/${day}/${taskId}`, {
      done: !done,
    });
  } catch (error) {
    console.log(error.message);
  }
}

function* saveTasksDataSaga({ payload }:any):any {
  try {
    yield call(firebaseService.saveTasksDataService(payload));
  } catch (error) {
    console.log(error);
  }
}

export function* userDataWatcher(): Generator<ForkEffect<never>, void> {
  yield takeEvery(GET_DATA, getDataSaga);
  yield takeEvery(PATCH_DATA, patchDataSaga);
  yield takeEvery(SAVE_DATA, saveTasksDataSaga);
}
