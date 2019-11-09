import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
    {
        path: 'auth',
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'login' },
            { path: 'login', loadChildren: './login/login.module#LoginModule' },
            { path: 'register', loadChildren: './register/register.module#RegisterModule' }
        ]
    }
];

export const firebaseConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyBzU_A1tkOkkLjFooGqtttmD_i4HVdONQ8",
    authDomain: "fitness-app-f10b0.firebaseapp.com",
    databaseURL: "https://fitness-app-f10b0.firebaseio.com",
    projectId: "fitness-app-f10b0",
    storageBucket: "fitness-app-f10b0.appspot.com",
    messagingSenderId: "830904864815",
    //measurementId: "G-523GSQ99KQ"
    //appId: "1:830904864815:web:7c4beca100c2f4c7e5b6da",    
  };

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot()
    ]
})
export class AuthModule {

}