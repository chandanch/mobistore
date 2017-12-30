import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from "firebase"; 

import { HomePage } from '../pages/home/home';
import { FirebaseConfig } from './../common/models/firebaseConfig';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  private firebaseConfig: FirebaseConfig

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      //add firebase configuration
      this.firebaseConfig = {
        apiKey: "AIzaSyAjZR2-S9uxK84Y0bzOU6whMo-fKuXNrS0",
        authDomain: "mobistore-f84d2.firebaseapp.com",
        databaseURL: "https://mobistore-f84d2.firebaseio.com",
        projectId: "mobistore-f84d2",
        storageBucket: "",
        messagingSenderId: "956058971588"
      }
      firebase.initializeApp(this.firebaseConfig);

    });
  }
}

