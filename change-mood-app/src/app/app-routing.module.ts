import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppGuard} from './guards/app.guard';
import {AuthGuard} from './guards/auth.guard';
import {AddComponent} from './pages/add/add.component';
import {DetailsComponent} from './pages/details-component/details.component';
import {ExampleTableComponent} from './pages/example-table/example-table.component';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AppGuard]},
  {path: 'details/:city', component: DetailsComponent, canActivate: [AppGuard]},
  {path: 'add', component: AddComponent, canActivate: [AppGuard]},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'signup', component: SignupComponent, canActivate: [AuthGuard]},
  {path: 'table', component: ExampleTableComponent, canActivate: [AppGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
