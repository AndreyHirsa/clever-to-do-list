import { IUserData, UserDataActionsType } from '../../interfaces/IUserData';
import { PATCH_USER_DATA } from './constants';

export const patchUserData = (data:IUserData):UserDataActionsType => ({
  type: PATCH_USER_DATA,
  payload: data,
});
