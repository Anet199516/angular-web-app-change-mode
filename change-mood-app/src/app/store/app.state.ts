import * as fromLoginState from '../store/login/reducers/login.reducer';
import * as fromCityState from '../store/cities/reducers/city.reducer';
import * as fromTableState from '../store/table-practise/reducers/table.reducers';
import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';

export interface AppState {
  loginState: fromLoginState.LoginState;
  citiesState: fromCityState.CityState;
  tableState: fromTableState.TableState;
}

export const reducers: ActionReducerMap<AppState> = {
  loginState: fromLoginState.reducer,
  citiesState: fromCityState.reducer,
  tableState: fromTableState.reducer
}


export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function (state: AppState, action: any): AppState {
    const newState = reducer(state, action);

    console.log('Weather' + action.type, newState);

    return newState;
  }
}

export const metaReducers: MetaReducer<AppState>[] = [logger];
