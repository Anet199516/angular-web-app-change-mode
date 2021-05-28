import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { BrowserModule } from '@angular/platform-browser';

import {MatTableModule} from '@angular/material/table';

import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {AngularFireLite} from 'angularfire-lite';
import {environment} from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CustomLightBoxModule} from './components/custom-lightbox/custom-lightbox.module';
import { AddComponent } from './pages/add/add.component';
import {DetailsComponent} from './pages/details-component/details.component';
import { ExampleTableComponent } from './pages/example-table/example-table.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import {GameTableService} from './services/game-table/game-table.service';
import {UiService} from './services/ui/ui.service';
import {WeatherService} from './services/weather/weather.service';
import {metaReducers, reducers} from './store/app.state';
import {CityEffects} from './store/cities/effects/city.effects';
import {LoginEffects} from './store/login/effects/login.effects';
import { AddCardComponent } from './ui/add-card/add-card.component';
import { ErrorComponent } from './ui/error/error.component';
import { WeatherCardComponent } from './ui/weather-card/weather-card.component';
import { CustomToggleComponent } from './components/custom-toggle/custom-toggle.component';
import { CustomRadioButtonsComponent } from './components/custom-radio-buttons/custom-radio-buttons.component';
import { ListEntitiesComponent } from './components/list-entities/list-entities.component';

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
    ErrorComponent,
    ExampleTableComponent,
    CustomToggleComponent,
    CustomRadioButtonsComponent,
    ListEntitiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AngularFireLite.forRoot(environment.config),
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([
      CityEffects, LoginEffects,
    ]),
    BrowserAnimationsModule,
    // Material Angular
    MatTableModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,

    CustomLightBoxModule
  ],
  providers: [WeatherService, UiService, GameTableService],
  // tslint:disable-next-line:object-literal-sort-keys
  bootstrap: [AppComponent],
})
export class AppModule { }
