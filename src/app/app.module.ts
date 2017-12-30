import { PhonelistPage } from './../pages/phonelist/phonelist';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginComponent } from './../components/login/login';
import { Labels } from './../utilities/labels';
import { LoginModal } from '../pages/login-modal/login-modal';
import { SignupModalPage } from '../pages/signup-modal/signup-modal';
import { ToastServiceProvider } from '../providers/toast-service/toast-service';
import { HttpClientModule } from '@angular/common/http'; 



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginModal,
    SignupModalPage,
    PhonelistPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginModal, 
    SignupModalPage,
    PhonelistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Labels,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ToastServiceProvider
  ]
})
export class AppModule {}
