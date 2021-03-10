import { persistedRootReducer } from 'redux/reducers/rootReducer';

export type RootState = ReturnType<typeof persistedRootReducer>
