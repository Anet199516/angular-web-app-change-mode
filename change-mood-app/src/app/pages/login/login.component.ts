import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as LoginActions from '../../store/login/actions/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store) {}

  ngOnInit() {}

  login(e) {
    this.store.dispatch(new LoginActions.login({
      email: e.target.email.value,
      password: e.target.password.value
    }));
  }

}
