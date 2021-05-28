import {createAction, props} from '@ngrx/store';
import {TableTypes} from '../../../types/table-types';

export const getData = createAction(
  '[Table] Get mockup data'
);

export const getDataSuccess = createAction(
  '[Table] Get mockup data success',
  props<{data: TableTypes[]}>()
);

export const getDataFailed = createAction(
  '[Table] Get mockup data failed',
  props<{err: string}>()
);

export const changeVisibleProperty = createAction(
  '[Table] Change visible property',
  props<{id: string, value: boolean}>()
);

export const changeModeIconProperty = createAction(
  '[Table] Change mode icon property',
  props<{id: string, value: string}>()
);

export const selectRow = createAction(
  '[Table] Select a row',
  props<{row: TableTypes}>()
);
