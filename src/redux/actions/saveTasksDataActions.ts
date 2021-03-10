import { IUserDataReducer } from 'interfaces/IUserDataReducer';
import { SAVE_DATA } from './constants';

export const saveData = (data:IUserDataReducer): {payload: IUserDataReducer, type: typeof SAVE_DATA} => ({
  type: SAVE_DATA,
  payload: data,
});
