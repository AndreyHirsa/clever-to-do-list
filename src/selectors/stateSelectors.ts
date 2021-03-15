import { createSelectorHook } from 'react-redux';
import { RootState } from 'interfaces/RootStateType';
import { IUserDataReducer } from 'interfaces/IUserDataReducer';
import { ISignUpInitialState } from 'interfaces/ISignUpReducer';
import { ITasksDataInitialState } from 'interfaces/ITasksDataReducer';
import { IUserInitialState } from 'interfaces/IUserStateReducer';

export const useSelector = createSelectorHook<RootState>();
export const useUserState = (): IUserInitialState['user'] =>
    useSelector((state) => state.userStateReducer.user);
export const useUserDataState = (): IUserDataReducer =>
    useSelector((state) => state.userDataReducer);
export const useSignUpState = (): ISignUpInitialState =>
    useSelector((state) => state.signUpReducer);
export const useTasksDataState = (): ITasksDataInitialState =>
    useSelector((state) => state.tasksDataReducer);
export const useLoginError = (): IUserInitialState['error'] =>
    useSelector((state) => state.userStateReducer.error);
