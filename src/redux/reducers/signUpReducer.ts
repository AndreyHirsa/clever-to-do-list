import { RESET_MESSAGE, SET_SIGN_UP_STATUS } from 'redux/actions/constants';
import { ISignUpInitialState, SignUpActionsType } from 'interfaces/ISignUpReducer';

export const signUpInitialState:ISignUpInitialState = {
  isSignedUp: false,
  message: {
    type: undefined, value: null,
  },
};

export const signUpReducer = (
  state = signUpInitialState,
  action: SignUpActionsType,
): ISignUpInitialState => {
  switch (action.type) {
    case SET_SIGN_UP_STATUS:
      return action.payload;
    case RESET_MESSAGE:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
