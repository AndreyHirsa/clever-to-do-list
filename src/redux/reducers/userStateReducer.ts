import { IUserInitialState } from '../../interfaces/IUserInitialState';
import { UserStateActionsType } from '../../interfaces/IUserStateActions';
import { LOG_IN_FAILURE, LOG_IN_SUCCESS, LOG_OUT } from '../actions/constants';

export const userInitialState: IUserInitialState = { user: null, error: null };

export function userStateReducer(
  state = userInitialState,
  action: UserStateActionsType,
): typeof userInitialState {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return { ...state, user: action.payload };
    case LOG_IN_FAILURE:
      return { ...state, error: action.payload };
    case LOG_OUT:
      return { user: null, error: null };
    default:
      return state;
  }
}
