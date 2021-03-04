
import { createSelectorHook } from 'react-redux';
import { RootState } from '../interfaces/RootStateType';
import { userInitialState } from '../redux/reducers/userStateReducer';


const useSelector = createSelectorHook<RootState>();
export const useUserState = (): any =>
    useSelector((state) => state.userStateReducer.user)
export const useUserData = (): any =>{
    useSelector((state) => state.tasksDataReducer)
}    