import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as AuthActions from '../../store/login/actions/login.actions';
import * as AuthSelectors from '../../store/login/selectors/login.selectors';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  errorMessage; // move to the container or to the service
  errorMessageSubs$: Subscription;

  constructor(private store: Store) {}

  ngOnInit() {
    this.errorMessageSubs$ = this.store.select(AuthSelectors.selectErrorMessage).subscribe(err => {
      if (!err) return;

      this.errorMessage = err;
    })
  }

  login(e) {
    this.store.dispatch(AuthActions.login({
      email: e.target.email.value,
      password: e.target.password.value
    }));
  }

  ngOnDestroy() {
    this.errorMessageSubs$.unsubscribe();
  }

}
