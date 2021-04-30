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
    ofType(AuthActions.login),
    withLatestFrom(this.store$),
    map(([{email, password}, store]) => {
      return {
        email: email, password: password
      }
    }),
    switchMap((payload) => {
      if (!payload) return;

      return this.fireBaseService.signin(payload.email, payload.password)
        .pipe(map(response => {
            if (response == null) return;

            this.router.navigateByUrl('');
            return AuthActions.loginSuccess({userName: payload.email, uid: response.user.uid});
          })
        )
    }),
    catchError(err => {
      console.log('Error during login', err);
      return of(AuthActions.loginFailed({err: `Error during login: ${err}`}))
    })
  ))

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logout),
    switchMap(() => {

      return this.fireBaseService.auth.signout().pipe(
        map(() => {
          this.router.navigateByUrl('/login');
          return AuthActions.logoutSuccess();
        })
      )
    }),
    catchError(err => {
      console.log('Error during logout', err);
      return of(AuthActions.logoutFailed({err: `Error during logout: ${err}`}))
    })
    )
  )

  signUp$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.signUp),
    withLatestFrom(this.store$),
    map(([{email, password}, store]) => {
      return {
        email: email,
        password: password
      }
    }),
    switchMap((payload) => {
      if (!payload) return;

      return this.fireBaseService.signup(payload.email, payload.password).pipe(
        map((res) => {

          this.router.navigateByUrl('');
          return AuthActions.signUpSuccess();
        })
      )
    }),
    catchError(err => {
      console.log('Error during signup', err);
      return of(AuthActions.signUpFailed({err: `Error during signup: ${err}`}))
    })
  ))
}
