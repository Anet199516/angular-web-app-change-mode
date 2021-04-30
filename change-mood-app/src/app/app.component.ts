import {Component, OnDestroy, OnInit} from '@angular/core';
import {UiService} from './services/ui/ui.service';
import {FbService} from './services/fb/fb.service';
import {Router} from '@angular/router';
import {Observable, Subscription} from "rxjs";
import * as LoginActions from '../app/store/login/actions/login.actions';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  showMenu = false;
  darkModeActive: boolean;

  userEmail = '';
  loggedIn: Observable<any>;
  sub1: Subscription;

  constructor(public ui: UiService, public fb: FbService, public router: Router, private store: Store) {
  }

  ngOnInit() {
    // move to the store
    this.sub1 = this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    });

    this.fb.auth.userData().subscribe((user) => {
      this.userEmail = user.email;
    });

    this.loggedIn = this.fb.isAuth();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  modeToggleSwitch() {
    this.ui.darkModeState.next(!this.darkModeActive);
  }

  logout() {
    this.toggleMenu();
    this.store.dispatch(LoginActions.logout());
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

}
