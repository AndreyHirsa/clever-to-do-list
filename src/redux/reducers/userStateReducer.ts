import {
    IUserInitialState,
    UserStateActionsType,
} from 'interfaces/IUserStateReducer';
import {
    LOG_IN_FAILURE,
    LOG_IN_SUCCESS,
    LOG_OUT,
} from 'redux/actions/constants';

export const userInitialState: IUserInitialState = { user: null, error: null };

export function userStateReducer(
    state = userInitialState,
    action: UserStateActionsType
): IUserInitialState {
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
