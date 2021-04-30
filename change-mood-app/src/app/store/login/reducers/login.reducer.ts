import * as AuthActions from '../actions/login.actions';
import * as model from '../../../app.model';
import {Action, createReducer, on} from "@ngrx/store";

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

const loginReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess,
    ((state, {userName, uid}) => ({...state, login: {...state.login, userName, uid} }))),

  on(AuthActions.loginFailed,
    ((state, {err}) => ({...state, login: {...state.login, isLoginFailed: true, errorMessage: err}}))),

  on(AuthActions.logoutSuccess, (() => ({...initialState}))),

  on(AuthActions.loginFailed, ((state, {err}) => ({...state, login: {...state.login, errorMessage: err}}))),

  on(AuthActions.signUpFailed, ((state, {err}) => ({...state, login: {...state.login, errorMessage: err}})))
)

export function reducer(state: LoginState | undefined, action: Action) {
  return loginReducer(state, action);
}
