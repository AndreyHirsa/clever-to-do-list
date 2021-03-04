import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { signUpReducer } from './signUpReducer';
import { userStateReducer } from './userStateReducer';

const  persistConfig={
    key:'root',
    storage,
    whitelist:['userStateReducer'],
}

const rootReducer=combineReducers({
    signUpReducer,
    userStateReducer,
})

export const persistedRootReducer = persistReducer(persistConfig,rootReducer)