import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from "firebase/app";
import { error } from '@firebase/database/dist/esm/src/core/util/util';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

import { PhonelistPage } from '../phonelist/phonelist';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';


@Component({
  selector: 'page-login-modal',
  templateUrl: 'login-modal.html',
  providers: [ToastServiceProvider]
})
export class LoginModal {

  email: string;
  password: string;
  private loading;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private loadingController: LoadingController,
    private toastService: ToastServiceProvider,
    private alertController: AlertController,
    private firebaseAuth: AngularFireAuth,
    private viewController: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginModalPage');

  }

  dismissModal() {
    this.viewController.dismiss();
  }

  submit(email: string, password: string) {
    this.loading = this.loadingController.create({
      content: 'Authenticating...'
    })
    this.loading.present().then(() => {
      this.firebaseAuth.auth.signInWithEmailAndPassword(email, password).then(
        success => {
          console.log('success');
          this.loading.dismiss().then(() => {
            this.toastService.showToast('Login Successful');
            this.navCtrl.push(PhonelistPage);
          })
          
        },
        error => {
          this.loading.dismiss().then(() => {
            this.showErrorAlert(error);
          })
          console.log('error in login', error.message);
        }
      )
    })
    
  }

  showErrorAlert(error) {
    let errorAlert = this.alertController.create({
      title: 'Error!',
      subTitle: error.message,
      buttons: ['Okay']
    })
    errorAlert.present();
  }

}
