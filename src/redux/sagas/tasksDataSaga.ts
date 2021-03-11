import {
  call,
  CallEffect,
  ForkEffect,
  put,
  PutEffect,
  takeEvery,
} from 'redux-saga/effects';
import {
  GET_DATA, PATCH_DATA, SAVE_DATA,
} from 'redux/actions/constants';
import { firebaseService, rsf } from 'services/firebaseService';
import {
  getDataFailure, getDataSuccess, patchDataFailure, patchDataSuccess, saveDataFailure, saveDataSuccess,
} from 'redux/actions/getTasksDataActions';
import { IUserDataReducer } from 'interfaces/IUserDataReducer';
import { IGetData, ITodo, TasksDataActionTypes } from 'interfaces/ITodo';

function* getDataSaga({
  payload: {
    userId, year, month, day,
  },
}:IGetData): Generator<CallEffect<any> | PutEffect<TasksDataActionTypes>, void, any> {
  try {
    const data = yield call(rsf.database.read, `${userId}/${year}/${month}/${day}`);
    yield put(getDataSuccess(Object.keys(data).map((key:any) => data[key])));
  } catch {
    yield put(getDataFailure([]));
  }
}

function* patchDataSaga({
  payload: {
    userId, taskId, year, month, day, done,
  },
}: {payload: IUserDataReducer, type: string}): any {
  try {
    yield call(rsf.database.patch, `${userId}/${year}/${month}/${day}/${taskId}`, {
      done: !done,
    });
    yield put(patchDataSuccess());
  } catch (error) {
    yield put(patchDataFailure());
  }
}

function* saveTasksDataSaga({
  payload: {
    userId, taskId, year, month, day, value,
  },
}: any)
: any {
  try {
    const key = yield call(rsf.database.create, `${userId}/${year}/${month}/${day}`, {
      value,
      done: false,
      id: taskId,
    });
    yield console.log(key);
    yield put(saveDataSuccess());
  } catch (error) {
    yield put(saveDataFailure());
  }
}

export function* userDataWatcher(): Generator<ForkEffect<never>, void> {
  yield takeEvery(GET_DATA, getDataSaga);
  yield takeEvery(PATCH_DATA, patchDataSaga);
  yield takeEvery(SAVE_DATA, saveTasksDataSaga);
}
