import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule } from '../auth/auth.module'

// containers
import { AppComponent } from './containers/app/app.component';

// components
import { AppHeaderComponent } from './components/app-header/app-header.component'
import { AppNavComponent } from './components/app-nav/app-nav.component'

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/*
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBzU_A1tkOkkLjFooGqtttmD_i4HVdONQ8",
    authDomain: "fitness-app-f10b0.firebaseapp.com",
    databaseURL: "https://fitness-app-f10b0.firebaseio.com",
    projectId: "fitness-app-f10b0",
    storageBucket: "fitness-app-f10b0.appspot.com",
    messagingSenderId: "830904864815",
    appId: "1:830904864815:web:7c4beca100c2f4c7e5b6da",
    measurementId: "G-523GSQ99KQ"
  };

 */
