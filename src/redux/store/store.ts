import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { persistedRootReducer } from 'redux/reducers/rootReducer';
import { userAuthWatcher } from 'redux/sagas/authSaga';
import { userDataWatcher } from 'redux/sagas/tasksDataSaga';

const sagaMiddleware = createSagaMiddleware();

export const store:any = createStore(persistedRootReducer,
  applyMiddleware(sagaMiddleware));

export const persistor = persistStore(store);

sagaMiddleware.run(userAuthWatcher);
sagaMiddleware.run(userDataWatcher);
