import * as fromLoginState from '../store/login/reducers/login.reducer';
import {ActionReducer, ActionReducerMap, MetaReducer} from "@ngrx/store";

export interface AppState {
  loginState: fromLoginState.LoginState;
}

export const reducers: ActionReducerMap<AppState> = {
  loginState: fromLoginState.loginReducer
}


export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function (state: AppState, action: any): AppState {
    const newState = reducer(state, action);

    console.log('Weather' + action.type, newState);

    return newState;
  }
}

export const metaReducers: MetaReducer<AppState>[] = [logger];
