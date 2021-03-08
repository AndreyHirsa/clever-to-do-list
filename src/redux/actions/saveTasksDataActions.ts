import { SAVE_DATA } from './constants';

export const saveData = (data:any) => ({
  type: SAVE_DATA,
  payload: data,
});
