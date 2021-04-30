import {createAction, props} from "@ngrx/store";

export const getCities = createAction('[Get cities] Try get cities');

export const getCitiesSuccess = createAction('[Get cities success] Get cities success', props<{cities: []}>());

export const getCitiesFailed = createAction('[Get cities failed] Get cities failed', props<{error: string}>());


