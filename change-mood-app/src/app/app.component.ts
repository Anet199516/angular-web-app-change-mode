import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMenu = false;
  darkModeActive: boolean;

  userEmail = '';

  constructor(public router: Router) {
  }

  // loggedIn = this.fb.isAuth();
  sub1;

  ngOnInit() {
    // this.sub1 = this.ui.darkModeState.subscribe((value) => {
    //   this.darkModeActive = value;
    // });
    //
    // this.fb.auth.userData().subscribe((user) => {
    //   this.userEmail = user.email;
    // });

  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  modeToggleSwitch() {
    // this.ui.darkModeState.next(!this.darkModeActive);
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

  logout() {
    this.toggleMenu();
    this.router.navigateByUrl('/login');
    // this.fb.auth.signout();
  }
}
