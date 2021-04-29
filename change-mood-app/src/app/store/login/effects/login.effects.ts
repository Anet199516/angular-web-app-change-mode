import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.state";
import {FbService} from "../../../services/fb/fb.service";
import * as AuthActions from '../actions/login.actions';
import {catchError, map, switchMap, withLatestFrom} from "rxjs/operators";
import {of} from "rxjs";
import {Router} from "@angular/router";

export class LoginEffects {
  constructor(private actions$: Actions,
              private store$: Store<AppState>,
              private fireBaseService: FbService,
              private router: Router) {
  }

  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.LoginActionsConfig.LOGIN),
    map((action: AuthActions.login) => action),
    withLatestFrom(this.store$),
    map(([action, store]) => {
      return {
        email: action.payload.email,
        password: action.payload.password
      }
    }),
    switchMap((payload) => {
      if (!payload) return;

      return this.fireBaseService.signin(payload.email, payload.password)
        .pipe(map(response => {
            if (response == null) return;

            this.router.navigateByUrl('');
            return new AuthActions.loginSuccess({userName: payload.email, uid: response.user.uid});
          })
        )
    }),
    catchError(err => {
      console.log('Error during login', err);
      return of(new AuthActions.loginFailed(`Error during login: ${err}`))
    })
  ))

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.LoginActionsConfig.LOGOUT),
    map((action: AuthActions.login) => action),
    switchMap(() => {

      return this.fireBaseService.auth.signout().pipe(
        map(() => {
          this.router.navigateByUrl('/login');
          return new AuthActions.logoutSuccess();
        })
      )
    }),
    catchError(err => {
      console.log('Error during logout', err);
      return of(new AuthActions.logoutFailed(`Error during logout: ${err}`))
    })
    )
  )

  signUp$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.LoginActionsConfig.SIGNUP),
    map((action: AuthActions.signUp) => action),
    withLatestFrom(this.store$),
    map(([action, store]) => {
      return {
        email: action.payload.email,
        password: action.payload.password
      }
    }),
    switchMap((payload) => {
      if (!payload) return;

      return this.fireBaseService.signup(payload.email, payload.password).pipe(
        map((res) => {

          this.router.navigateByUrl('');
          return new AuthActions.signUpSuccess();
        })
      )
    }),
    catchError(err => {
      console.log('Error during signup', err);
      return of(new AuthActions.signUpFailed(`Error during signup: ${err}`))
    })
  ))
}
