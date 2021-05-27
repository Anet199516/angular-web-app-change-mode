import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {FbService} from '../../../services/fb/fb.service';
import {AppState} from '../../app.state';
import * as CitiesActions from '../../cities/actions/city.actions';

@Injectable()
export class CityEffects {
  constructor(private actions$: Actions,
              private store$: Store<AppState>,
              private fireBaseService: FbService) {
  }

  public getCities$ = createEffect(() => this.actions$.pipe(
    ofType(CitiesActions.getCities),
    switchMap(() => {
      return this.fireBaseService.getCities().pipe(
        map((res) => {
          if (!res?.length) {
            return CitiesActions.getCitiesFailed({error: 'Error during get cities'});
          }
          return CitiesActions.getCitiesSuccess(res);
        }),
      );
    }),
    catchError((err) => {
      console.log('Error during get cities', err);
      return of(CitiesActions.getCitiesFailed({error: `Error during getCities: ${err}`}));
    }),
  ));

}
