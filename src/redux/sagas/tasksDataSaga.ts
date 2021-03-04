
import {GET_DATA} from "../actions/constants";
import { rsf } from '../../services/firebaseService';
import {
    call,
    CallEffect,
    ForkEffect,
    put,
    PutEffect,
    takeEvery,
} from 'redux-saga/effects';
import {getDataSuccess} from "../actions/getTasksDataActions";

function* getDataSaga({payload:{userId,year,month,day}}:any):any{
    try {
       const data:any = yield call(rsf.database.read, `${userId}/${year}/${month}/${day}/`);
       yield put(getDataSuccess(Object.keys(data).map((key) => data[key])));
    } catch {
        yield put(getDataSuccess([]));
    }
}

export function* userDataWatcher(): Generator<ForkEffect<never>, void> {
    yield takeEvery(GET_DATA, getDataSaga);
}