import { PATCH_USER_DATA } from './constants';

export const patchUserData = (data:any) => ({
  type: PATCH_USER_DATA,
  payload: data,
});
