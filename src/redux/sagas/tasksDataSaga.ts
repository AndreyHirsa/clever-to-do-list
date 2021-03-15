import {
    call,
    CallEffect,
    ForkEffect,
    put,
    PutEffect,
    takeEvery,
} from 'redux-saga/effects';
import { GET_DATA, PATCH_DATA, SAVE_DATA } from 'redux/actions/constants';
import {
    getDataFailure,
    getDataSuccess,
    patchDataFailure,
    patchDataSuccess,
    saveDataFailure,
    saveDataSuccess,
} from 'redux/actions/tasksDataActions';
import {
    IGetData,
    IPatchData,
    ISaveData,
    TasksDataActionTypes,
} from 'interfaces/ITasksDataReducer';
import { rsf } from 'firebase/firebaseConfig';

function* getDataSaga({
    payload: { userId, year, month, day },
}: IGetData): Generator<
  CallEffect<unknown> | PutEffect<TasksDataActionTypes>,
  void,
  ArrayLike<unknown>
> {
    try {
        const data = yield call(
            rsf.database.read,
            `${userId}/${year}/${month}/${day}`
        );
        if (data) {
            yield put(
                getDataSuccess(
                    Object.entries(data).map((key: Record<string, any>) => ({
                        ...key[1],
                        id: key[0],
                    }))
                )
            );
        } else {
            yield put(getDataSuccess([]));
        }
    } catch (error) {
        yield put(getDataFailure([]));
    }
}

function* patchDataSaga({
    payload: { userId, taskId, year, month, day, done },
}: IPatchData): Generator<
  CallEffect<unknown> | PutEffect<TasksDataActionTypes>,
  void,
  unknown
> {
    try {
        yield call(
            rsf.database.patch,
            `${userId}/${year}/${month}/${day}/${taskId}`,
            {
                done: !done,
            }
        );
        yield put(patchDataSuccess());
    } catch (error) {
        yield put(patchDataFailure());
    }
}

function* saveTasksDataSaga({
    payload: { userId, year, month, day, value },
}: ISaveData): Generator<
  CallEffect<unknown> | PutEffect<TasksDataActionTypes>,
  void,
  unknown
> {
    try {
        yield call(rsf.database.create, `${userId}/${year}/${month}/${day}`, {
            value,
            done: false,
        });
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
