import {ActionWithPayload} from "../../../types/types";
import {LoginActionsConfig} from '../actions/login.actions';
import * as model from '../../../app.model';

export interface LoginState {
  login: model.ILogin;
}

const initialState: LoginState = <LoginState> {
  login: <model.ILogin> {
    userName: '',
    uid: '',
    isLoginFailed: false,
    errorMessage: ''
  },
};

export function loginReducer(state = initialState, action: ActionWithPayload<any>): LoginState {
  switch (action.type) {

    case LoginActionsConfig.LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          ...state.login,
          userName: action.payload.userName,
          uid: action.payload.uid,
        }
      }

    case LoginActionsConfig.LOGIN_FAILED:
      return {
        ...state,
        login: {
          ...state.login,
          isLoginFailed: true,
          errorMessage: action.payload
        }
      }

    case LoginActionsConfig.LOGOUT_SUCCESS:
      return {
        ...initialState
      }

    case LoginActionsConfig.LOGOUT_FAILED:
      return {
        ...state,
        login: {
          ...state.login,
          errorMessage: action.payload
        }
      }

    case LoginActionsConfig.SIGNUP_FAILED:
      return {
        ...state,
        login: {
          ...state.login,
          errorMessage: action.payload
        }
      }

    default:
      return state;
  }
}
