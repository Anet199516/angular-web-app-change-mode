import {AppState} from "../../app.state";
import {createSelector} from "@ngrx/store";
import {CityState} from "../reducers/city.reducer";

export const selectCity = (state: AppState) => state.citiesState;
export const selectCitiesList = createSelector(selectCity, (state: CityState) => state.citiesData.cities);
