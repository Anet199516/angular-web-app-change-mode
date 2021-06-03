import {createAction, props} from '@ngrx/store';
import {TableTypes} from '../../../types/table-types';


/**
 * Get data for table
 */
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

/**
 * Change property
 */
export const changeVisibleProperty = createAction(
  '[Table] Change visible property',
  props<{id: string, value: boolean}>()
);

export const changeModeIconProperty = createAction(
  '[Table] Change mode icon property',
  props<{id: string, value: string}>()
);

/**
 * Select row
 */
export const selectRow = createAction(
  '[Table] Select a row',
  props<{row: TableTypes}>() // or id
);


/**
 * Add new row to the table
 */
export const addNewRow = createAction(
  '[Table] Add new row',
  props<{row: any}>()
);

export const addNewRowSuccess = createAction(
  '[Table] Add new row success',
  props<{data: TableTypes[]}>()
);

export const addNewRowFailed = createAction(
  '[Table] Add new row failed',
  props<{error: string}>()
);

/**
 * Remove row from the table
 */

export const removeRow = createAction(
  '[Table] Remove row',
  props<{id: any}>()
);

export const removeRowSuccess = createAction(
  '[Table] Remove row success',
  props<{data: TableTypes[]}>()
);

export const removeRowFailed = createAction(
  '[Table] Remove row failed',
  props<{error: string}>()
);
