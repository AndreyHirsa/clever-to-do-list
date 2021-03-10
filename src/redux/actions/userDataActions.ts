import { IPatchUserData, IUserDataReducer } from 'interfaces/IUserDataReducer';
import { PATCH_USER_DATA } from './constants';

export const patchUserData = (data:IUserDataReducer):IPatchUserData => ({
  type: PATCH_USER_DATA,
  payload: data,
});
