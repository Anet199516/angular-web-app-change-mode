import { createSelector } from '@ngrx/store';
import {AppState} from "../../app.state";
import {LoginState} from "../reducers/login.reducer";

export const selectLogin = (state: AppState) => state.loginState;

export const selectErrorMessage = createSelector(selectLogin, (state: LoginState) => state.login.errorMessage);
