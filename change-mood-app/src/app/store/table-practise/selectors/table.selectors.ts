import {createSelector} from '@ngrx/store';
import {AppState} from '../../app.state';
import {TableState} from '../reducers/table.reducers';

export const selectTableState = (state: AppState) => state.tableState;

export const selectTableData = createSelector(
  selectTableState,
  (state: TableState) => state.table.items
);
