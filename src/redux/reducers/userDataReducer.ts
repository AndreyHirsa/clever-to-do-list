import format from 'date-fns/format';
import { IPatchUserData, IUserData, UserActionsType } from 'interfaces/IUserData';

import { PATCH_USER_DATA } from 'redux/actions/constants';

const userDataInitialState:IUserData = {
  userId: '',
  year: format(new Date(), 'yyy'),
  month: format(new Date(), 'MMMM'),
  day: format(new Date(), 'd'),
  value: '',
  taskId: '',
  done: false,
};

export const userDataReducer = (state = userDataInitialState, action:UserActionsType)
:IUserData => {
  switch (action.type) {
    case PATCH_USER_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
