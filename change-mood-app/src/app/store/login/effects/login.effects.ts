import {Actions, Effect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.state";
import {FbService} from "../../../services/fb/fb.service";
import * as LoginActions from '../actions/login.actions';
import {catchError, map, switchMap, withLatestFrom} from "rxjs/operators";
import {of} from "rxjs";
import {Router} from "@angular/router";

export class LoginEffects {
  constructor(private actions$: Actions,
              private store$: Store<AppState>,
              private fireBaseService: FbService,
              private router: Router) {}

  @Effect() login$ = this.actions$.pipe(
    ofType(LoginActions.LoginActionsConfig.LOGIN),
    map((action: LoginActions.login) => action),
    withLatestFrom(this.store$),
    map(([action, store]) => {
      return {
        email: action.payload.email,
        password: action.payload.password
      }}),
    switchMap((payload) => {
      return this.fireBaseService.signin(payload.email, payload.password)
        .pipe(map(response => {
            if (response == null) return;

            this.router.navigateByUrl('');
            return new LoginActions.loginSuccess({userName: payload.email, uid: response.user.uid});
          })
        )
    }),
    catchError(err => {
      console.log('Error during login', err);
      return of(new LoginActions.loginFailed(err))
    })
  )
}
