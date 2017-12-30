
import { PhonelistPage } from './../pages/phonelist/phonelist';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Labels } from './../utilities/labels';
import { LoginModal } from '../pages/login-modal/login-modal';
import { SignupModalPage } from '../pages/signup-modal/signup-modal';
import { ToastServiceProvider } from '../providers/toast-service/toast-service';
import { HttpClientModule } from '@angular/common/http';
import { enviornment } from './../enviornment/enviornment';
import { TextResourceProvider } from '../providers/text-resource/text-resource';

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
    HttpClientModule,
    AngularFireModule.initializeApp(enviornment.firebase),
    AngularFireAuthModule,
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
    ToastServiceProvider,
    TextResourceProvider
  ]
})
export class AppModule {
}

