import * as model from '../../../app.model';
import {Action, createReducer, on} from '@ngrx/store';
import * as TableActions from '../actions/table.actions';

export interface TableState {
  table: model.ITable;
}

const initialState: TableState = <TableState> {
  table: <model.ITable> {
    items: [],
    errorMessage: '',
    selectedRow: null,
    changedProperties: []
  },
};

const tableReducer = createReducer(
  initialState,
  on(TableActions.getDataSuccess,
    ((state, {data}) => ({...state, table: {...state.table, items: data, changedProperties: []}}))),
  on(TableActions.selectRow,
    ((state, {row}) => ({...state, table: {...state.table, selectedRow: row}}))),
  on(TableActions.changeVisibleProperty,
    ((state, {id, fields}) => {
      let selectedTableCell = null;

      const copiedDataTable = state.table.items.map((data) => {
        if (data.id === id) {
          selectedTableCell = {
            ...data,
            visible: fields.visible
          };

          return selectedTableCell;
        }

        return data;
      });

      return {
        ...state,
        table: {
          ...state.table,
          items: copiedDataTable,
          changedProperties: [...state.table.changedProperties, {id, fields}]
        }
      };
    })
),
  on(TableActions.changeModeIconProperty,
    ((state, {id, fields}) => {

      let selectedTableCell = null;

      const modifData = state.table.items.map(item => {
        if (item.id === id) {
          selectedTableCell = {
            ...item,
            modeIcon: fields.modeIcon
          };

          return selectedTableCell;
        }

        return item;
      });

      return {
        ...state,
        table: {
          ...state.table,
          items: modifData,
          changedProperties: [...state.table.changedProperties, {id, fields}]
        }
      };
    })),
  on(TableActions.saveChangesSuccess,
    ((state, {prop}) => {
      return {
        ...state,

        table: {
          ...state.table,
          items: prop
        }
      };
    })
));


export function reducer(state: TableState | undefined, action: Action) {
  return tableReducer(state, action);
}
