import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.state";
import {FbService} from "../../../services/fb/fb.service";
import {Router} from "@angular/router";
import * as CitiesActions from "../../cities/actions/city.actions";
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {of} from "rxjs";

export class CityEffects {
  constructor(private actions$: Actions,
              private store$: Store<AppState>,
              private fireBaseService: FbService,
              private router: Router) {
  }

  getCities$ = createEffect(() => this.actions$.pipe(
    ofType(CitiesActions.getCities),
    switchMap(() => {

      return this.fireBaseService.getCities().pipe(
        map(cities => {
          debugger
          if (!cities.length) return;

            return CitiesActions.getCitiesSuccess(cities);
        })
      )
    }),
    catchError(err => {
      console.log('Error during get cities', err);
      return of(CitiesActions.getCitiesFailed({error: `Error during getCities: ${err}`}))
    })
  ))

}
