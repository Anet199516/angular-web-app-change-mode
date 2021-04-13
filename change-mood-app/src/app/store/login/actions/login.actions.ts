import {ActionWithPayload} from "../../../types/types";

export enum LoginActionsConfig {
  APP_INIT = '[App] App init',
  LOGIN = '[Login] Login',
  LOGIN_SUCCESS = '[Login] Login success',
  LOGIN_FAILED = '[Login] Login failed'
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

export type LoginActions = initApp | login | loginSuccess | loginFailed;


