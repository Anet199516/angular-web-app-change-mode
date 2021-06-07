import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';
import {switchMap, withLatestFrom, map, catchError} from 'rxjs/operators';
import {HttpService} from '../../../services/http/http.service';
import {AppState} from '../../app.state';

import * as TableActions from '../actions/table.actions';

@Injectable()
export class DataTableConfiguration {
  constructor(private store$: Store<AppState>,
              private httpService: HttpService,
              private actions$: Actions) {
  }

  getData$ = createEffect(() => this.actions$.pipe(
    ofType(TableActions.getData),
    withLatestFrom(this.store$), // can be removed
    switchMap((store) => {
      if (!store) {
        return null;
      }

      return this.httpService.getTableData().pipe(
        map(res => {
          if (!res?.length) {
            return TableActions.getDataFailed({err: 'Error'});
          }

          return TableActions.getDataSuccess({data: res});
        })
      );
    }),
    catchError(err => {
      console.error('Error during getData!!!');
      return of(TableActions.getDataFailed({err}));
    })
    ));

  saveChanges$ = createEffect(() => this.actions$.pipe(
    ofType(TableActions.saveChanges),
    withLatestFrom(this.store$),
    switchMap(([ , store]) => {
      if (!store) {
        return null;
      }

      const {tableState: {table: {changedProperties}}} = store;

      return this.httpService.updateAll(changedProperties).pipe(
        map(res => {
          if (res == null) {
            return TableActions.saveChangesFailed({err: 'Error'});
          }

          this.store$.dispatch(TableActions.saveChangesSuccess({prop: res}));
          return TableActions.getData();
        })
      );
    }),
    catchError(err => {
      console.error('Error during getData!!!');
      return of(TableActions.saveChangesFailed({err}));
    })
  ));
}
