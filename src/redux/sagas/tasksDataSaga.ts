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
import { getDataSuccess } from 'redux/actions/getTasksDataActions';
import { IUserDataReducer } from 'interfaces/IUserDataReducer';
import { IGetData, ITodo, TasksDataActionTypes } from 'interfaces/ITodo';

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
}: {payload: IUserDataReducer, type: string}): Generator<CallEffect<any>, void, unknown> {
  try {
    yield call(rsf.database.patch, `${userId}/${year}/${month}/${day}/${taskId}`, {
      done: !done,
    });
  } catch (error) {
    console.log(error.message);
  }
}

function* saveTasksDataSaga({ payload }: {payload: IUserDataReducer, type: string})
: Generator<CallEffect<any>, void, unknown> {
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
