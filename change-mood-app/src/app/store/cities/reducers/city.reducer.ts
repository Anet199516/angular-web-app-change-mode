import * as model from '../../../app.model';
import {Action, createReducer, on} from "@ngrx/store";
import * as CitiesActions from '../actions/city.actions';

export interface CityState {
  citiesData: model.ICities;
}

const initialState: CityState = <CityState> {
  citiesData: <model.ICities> {
    cities: null,
    errorMessage: ''
  }
};

const cityReducer = createReducer(
  initialState,
  on(CitiesActions.getCitiesSuccess, ((state,{cities}) => ({...state, citiesData: {...state.citiesData, cities}}))),

  on(CitiesActions.getCitiesFailed, ((state, {error}) => ({...state, citiesData: {...state.citiesData, errorMessage: error}})))
)

export function reducer(state: CityState | undefined, action: Action) {
  return cityReducer(state, action);
}
