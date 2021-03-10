import { IUserData } from 'interfaces/IUserData';
import { SAVE_DATA } from './constants';

export const saveData = (data:IUserData): {payload: IUserData, type: typeof SAVE_DATA} => ({
  type: SAVE_DATA,
  payload: data,
});
