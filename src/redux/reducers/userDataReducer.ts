import format from 'date-fns/format';

import { PATCH_USER_DATA } from '../actions/constants';

const userDataInitialState = {
  userId: '',
  year: format(new Date(), 'yyy'),
  month: format(new Date(), 'MMMM'),
  day: format(new Date(), 'd'),
  value: '',
  taskId: '',
  done: false,
};

export const userDataReducer = (state = userDataInitialState, action:any) => {
  switch (action.type) {
    case PATCH_USER_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
