import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import * as LoginActions from '../app/store/login/actions/login.actions';
import {FbService} from './services/fb/fb.service';
import {UiService} from './services/ui/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  public showMenu = false;
  public darkModeActive: boolean;

  public userEmail = '';
  public loggedIn: Observable<any>;
  private sub1: Subscription;

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

  public toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  public modeToggleSwitch(): void {
    this.ui.darkModeState.next(!this.darkModeActive);
  }

  public logout(): void {
    this.toggleMenu();
    this.store.dispatch(LoginActions.logout());
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

}
