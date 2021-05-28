import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {LightboxModule} from 'ngx-lightbox';
import {AppRoutingModule} from '../../app-routing.module';

import {CustomLightboxComponent} from './custom-lightbox.component';


@NgModule({
  declarations: [CustomLightboxComponent],
  imports: [
    LightboxModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    CustomLightboxComponent
  ]
})
export class CustomLightBoxModule { }
