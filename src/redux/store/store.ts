import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { Persistor } from 'redux-persist/es/types';
import { persistedRootReducer } from '../reducers/rootReducer';
import { userAuthWatcher } from '../sagas/authSaga';
import { userDataWatcher } from '../sagas/tasksDataSaga';

const sagaMiddleware = createSagaMiddleware();

export const store:any = createStore(persistedRootReducer,
  applyMiddleware(sagaMiddleware));

export const persistor = persistStore(store);

sagaMiddleware.run(userAuthWatcher);
sagaMiddleware.run(userDataWatcher);
