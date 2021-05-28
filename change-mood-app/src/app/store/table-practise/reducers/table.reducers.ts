import * as model from '../../../app.model';
import {Action, createReducer, on} from '@ngrx/store';

export interface TableState {
  login: model.ILogin;
}

const initialState: TableState = <TableState> {

};

const tableReducer = createReducer(
  initialState,
)


export function reducer(state: TableState | undefined, action: Action) {
  return tableReducer(state, action);
}
