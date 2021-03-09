import { SAVE_DATA } from './constants';
import { IUserData } from '../../interfaces/IUserData';

export const saveData = (data:IUserData): {payload: IUserData, type: string} => ({
  type: SAVE_DATA,
  payload: data,
});
