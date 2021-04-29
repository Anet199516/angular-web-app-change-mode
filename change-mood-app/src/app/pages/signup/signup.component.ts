import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as AuthActions from '../../store/login/actions/login.actions'
import * as AuthSelectors from '../../store/login/selectors/login.selectors';
import {Store} from "@ngrx/store";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  errorMessage; // move to the container or to the service
  errorMessageSubs$: Subscription;

  constructor(public router: Router, private store: Store) {
  }

  ngOnInit() {
      this.errorMessageSubs$ = this.store.select(AuthSelectors.selectErrorMessage).subscribe(err => {
        if (!err) return;

        this.errorMessage = err;
      })
  }

  // registration
  signup(e) {
    this.store.dispatch(new AuthActions.signUp({
      email: e.target.email.value,
      password: e.target.password.value
    }));
  }

  ngOnDestroy() {
    this.errorMessageSubs$.unsubscribe();
  }

}
