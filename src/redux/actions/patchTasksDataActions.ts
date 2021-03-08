import { PATCH_DATA } from './constants';

export const patchData = (data:any) => ({
  type: PATCH_DATA,
  payload: data,
});
