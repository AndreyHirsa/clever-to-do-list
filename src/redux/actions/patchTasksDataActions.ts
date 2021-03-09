import { PATCH_DATA } from './constants';
import { IUserData } from '../../interfaces/IUserData';

export const patchData = (data:IUserData): {payload: IUserData, type: string} => ({
  type: PATCH_DATA,
  payload: data,
});
