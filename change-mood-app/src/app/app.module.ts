import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { WeatherCardComponent } from './ui/weather-card/weather-card.component';
import { AddCardComponent } from './ui/add-card/add-card.component';
import {WeatherService} from "./services/weather/weather.service";
import {DetailsComponent} from "./pages/details-component/details.component";
import { AddComponent } from './pages/add/add.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ErrorComponent } from './ui/error/error.component';
import {FormsModule} from "@angular/forms";
import {NguiAutoCompleteModule} from "@ngui/auto-complete";
import {UiService} from "./services/ui/ui.service";
import {HttpClientModule} from "@angular/common/http";
import {AngularFireLite} from "angularfire-lite";
import {environment} from "../environments/environment";
import {StoreModule} from "@ngrx/store";
import {metaReducers, reducers} from "./store/app.state";
import {EffectsModule} from "@ngrx/effects";
import {LoginEffects} from "./store/login/effects/login.effects";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherCardComponent,
    AddCardComponent,
    DetailsComponent,
    AddComponent,
    LoginComponent,
    SignupComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NguiAutoCompleteModule,
    HttpClientModule,
    AngularFireLite.forRoot(environment.config),
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([
      LoginEffects
    ])
  ],
  providers: [WeatherService, UiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
