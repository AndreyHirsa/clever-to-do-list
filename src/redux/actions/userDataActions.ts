import { IPatchUserData, IUserDataReducer, UserActionsType } from 'interfaces/IUserDataReducer';
import { PATCH_USER_DATA } from './constants';

export const patchUserData = (data:IPatchUserData['payload']):UserActionsType => ({
  type: PATCH_USER_DATA,
  payload: data,
});
