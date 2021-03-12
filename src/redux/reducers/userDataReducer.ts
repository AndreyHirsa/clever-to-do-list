import format from 'date-fns/format';
import { IUserDataReducer, UserActionsType } from 'interfaces/IUserDataReducer';

import { PATCH_USER_DATA } from 'redux/actions/constants';

const userDataInitialState:IUserDataReducer = {
  userId: '',
  year: format(new Date(), 'yyy'),
  month: format(new Date(), 'MMMM'),
  day: format(new Date(), 'd'),
  value: '',
  taskId: '',
  done: false,
};

export const userDataReducer = (state = userDataInitialState, action:UserActionsType)
:IUserDataReducer => {
  switch (action.type) {
    case PATCH_USER_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
