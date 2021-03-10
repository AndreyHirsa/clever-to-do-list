import { IUserData } from 'interfaces/IUserData';
import { PATCH_DATA } from './constants';

export const patchData = (data:IUserData): {payload: IUserData, type: typeof PATCH_DATA} => ({
  type: PATCH_DATA,
  payload: data,
});
