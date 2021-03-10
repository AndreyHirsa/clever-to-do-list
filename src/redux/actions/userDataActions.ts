import { IPatchUserData, IUserData } from 'interfaces/IUserData';
import { PATCH_USER_DATA } from './constants';

export const patchUserData = (data:IUserData):IPatchUserData => ({
  type: PATCH_USER_DATA,
  payload: data,
});
