import { SignUpActionsType } from '../../interfaces/ISignUpActions';
import { ISignUpInitialState } from '../../interfaces/ISignUpInitialState';
import { SIGN_UP_FAILURE, SIGN_UP_SUCCESS } from '../actions/constants';

export const signUpInitialState:ISignUpInitialState = { isSignedUp: false, error: null };

export const signUpReducer = (
  state = signUpInitialState,
  action: SignUpActionsType,
): ISignUpInitialState => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return { isSignedUp: action.payload, error: null };
    case SIGN_UP_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
