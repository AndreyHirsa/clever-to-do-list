import { createSelectorHook } from 'react-redux';
import { RootState } from 'interfaces/RootStateType';

export const useSelector = createSelectorHook<RootState>();
export const useUserState = () => useSelector((state) => state.userStateReducer.user);
export const useUserDataState = () => useSelector((state) => state.userDataReducer);
export const useSignUpState = () => useSelector((state) => state.signUpReducer);
export const useTasksDataState = () => useSelector((state) => state.tasksDataReducer);
export const useSignUpError = () => useSelector((state) => state.signUpReducer.error);
export const useLoginError = () => useSelector((state) => state.userStateReducer.error);
