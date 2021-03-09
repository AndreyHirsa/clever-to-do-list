import {
  call,
  CallEffect,
  ForkEffect,
  put,
  PutEffect,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import {
  GET_DATA, PATCH_DATA, PATCH_USER_DATA, SAVE_DATA,
} from '../actions/constants';
import { firebaseService, rsf } from '../../services/firebaseService';
import { getData, getDataSuccess } from '../actions/getTasksDataActions';
import { IUserData } from '../../interfaces/IUserData';
import { IGetData, ITodo, TasksDataActionTypes } from '../../interfaces/ITodo';

function* getDataSaga({
  payload: {
    userId, year, month, day,
  },
}:IGetData): Generator<CallEffect<any> | PutEffect<TasksDataActionTypes>, void, ITodo[]> {
  try {
    const data:ITodo[] = yield call(rsf.database.read, `${userId}/${year}/${month}/${day}/`);

    yield put(getDataSuccess(Object.keys(data).map((key:any) => data[key])));
  } catch {
    yield put(getDataSuccess([]));
  }
}

function* patchDataSaga({
  payload: {
    userId, taskId, year, month, day, done,
  },
}: {payload: IUserData, type: string}): Generator<CallEffect<any>, void, unknown> {
  try {
    yield call(rsf.database.patch, `${userId}/${year}/${month}/${day}/${taskId}`, {
      done: !done,
    });
  } catch (error) {
    console.log(error.message);
  }
}

function* saveTasksDataSaga({ payload }: {payload: IUserData, type: string}): Generator<CallEffect<unknown>, void, unknown> {
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
