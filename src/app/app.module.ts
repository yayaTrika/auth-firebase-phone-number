import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';


import {environment} from "../environments/environment";
import {FormsModule} from "@angular/forms";
import { OtpComponent } from './component/otp/otp.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import * as firebase from 'firebase/app';
import { NgOtpInputModule } from 'ng-otp-input';


const FirebaseApp = firebase.initializeApp(environment.firebase);

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    OtpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // FirebaseApp,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    NgOtpInputModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
