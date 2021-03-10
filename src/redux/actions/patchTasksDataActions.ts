import { IUserDataReducer } from 'interfaces/IUserDataReducer';
import { PATCH_DATA } from './constants';

export const patchData = (data:IUserDataReducer): {payload: IUserDataReducer, type: typeof PATCH_DATA} => ({
  type: PATCH_DATA,
  payload: data,
});
