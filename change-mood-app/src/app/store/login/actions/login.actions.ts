import {createAction, props} from '@ngrx/store';

export const initApp = createAction(
  '[App] App init'
);

export const login = createAction(
  '[Login] Login',
  props<{email: string, password: string}>()
);

export const loginSuccess = createAction(
  '[Login] Login success',
  props<{userName: string, uid: string}>()
);

export const loginFailed = createAction(
  '[Logout failed] Logout failed',
  props<{err: string}>()
);

export const logout = createAction(
  '[Logout] Try logout'
);

export const logoutSuccess = createAction(
  '[Logout] Logout success'
);

export const logoutFailed = createAction(
  '[Logout] Try logout',
  props<{err: string}>()
);


export const signUp = createAction(
  '[Sign up] Try sign up',
  props<{email: string, password: string}>()
);


export const signUpSuccess = createAction(
  '[Sign up success] Sign up success'
);


export const signUpFailed = createAction(
  '[Sign up failed] Sign up failed',
  props<{err: string}>()
);


