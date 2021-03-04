import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { persistedRootReducer } from '../reducers/rootReducer';
import { userAuthWatcher } from '../sagas/authSaga';

const sagaMiddleware=createSagaMiddleware();

export const store:any = createStore(persistedRootReducer,
    applyMiddleware(sagaMiddleware),);

export const persistor = persistStore(store);



sagaMiddleware.run(userAuthWatcher);
