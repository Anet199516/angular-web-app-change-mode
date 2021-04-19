import {ActionWithPayload} from "../../../types/types";

export enum LoginActionsConfig {
  APP_INIT = '[App] App init',
  LOGIN = '[Login] Login',
  LOGIN_SUCCESS = '[Login] Login success',
  LOGIN_FAILED = '[Login] Login failed',
  LOGOUT = '[Logout] Try logout',
  LOGOUT_SUCCESS = '[Logout success] Logout success',
  LOGOUT_FAILED = '[Logout failed] Logout failed',
}

export class initApp implements ActionWithPayload<any> {
  public readonly type = LoginActionsConfig.APP_INIT;

  constructor(public payload?: any) {
  }
}

export class login implements ActionWithPayload<any> {
  readonly type = LoginActionsConfig.LOGIN;

  constructor(public payload?: any) {
  }
}

export class loginSuccess implements ActionWithPayload<any> {
  readonly type = LoginActionsConfig.LOGIN_SUCCESS;

  constructor(public payload?: any) {
  }
}

export class loginFailed implements ActionWithPayload<any> {
  readonly type = LoginActionsConfig.LOGIN_FAILED;

  constructor(public payload?: string) {
  }
}

export class logout implements ActionWithPayload<any> {
  readonly type = LoginActionsConfig.LOGOUT;

  constructor(public payload?: string) {
  }
}

export class logoutSuccess implements ActionWithPayload<any> {
  readonly type = LoginActionsConfig.LOGOUT_SUCCESS;

  constructor(public payload?: string) {
  }
}

export class logoutFailed implements ActionWithPayload<any> {
  readonly type = LoginActionsConfig.LOGOUT_FAILED;

  constructor(public payload?: string) {
  }
}

export type LoginActions = initApp |
  login |
  loginSuccess |
  loginFailed |
  logout |
  logoutSuccess |
  logoutFailed


