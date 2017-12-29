import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginComponent } from './../components/login/login';
import { Labels } from './../utilities/labels';
import { LoginModal } from './../pages/login-modal/login-modal';
import { SignupModalPage } from '../pages/signup-modal/signup-modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginModal,
    SignupModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginModal,
    SignupModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Labels,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
