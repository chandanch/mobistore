import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import * as firebase from "firebase";

import { SignupModel } from './../../common/models/signup.model';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { PhonelistPage } from '../phonelist/phonelist';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';

@Component({
  selector: 'page-signup-modal',
  templateUrl: 'signup-modal.html',
  providers: [ToastServiceProvider]
})
export class SignupModalPage {

  signupForm: FormGroup;
  private loading;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private fb: FormBuilder,
    private viewController: ViewController, 
    private loadingController: LoadingController,
    private alertController: AlertController,
    private toastService: ToastServiceProvider,
    private toastController: ToastController) {
    this.signupForm = this.fb.group({
      email:  [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupModalPage');
  }

  dismissModal() {
    this.viewController.dismiss();
  }

  submit(signupFormValue:  SignupModel) {
    console.log(signupFormValue);
    if(signupFormValue.password != signupFormValue.confirmPassword) {
      let errorToast = this.toastController.create({
        message: 'Login Failed: Password does not match',
        duration: 3000
      })
      errorToast.present();
    }
    else {
      this.loading = this.loadingController.create({
        content: 'Authenticating...'
      })
      this.loading.present().then(() => {
        this.addUser(signupFormValue);
      })
      
    }
  }

  addUser(signupValue: SignupModel) {
    firebase.auth().createUserWithEmailAndPassword(signupValue.email, signupValue.password).then(
      success => {
        console.log('Success');
        this.loading.dismiss().then(() => {
          this.toastService.showToast('Account Created Successfully');
          this.navCtrl.push(PhonelistPage);
        });
      },
      error => {
        this.loading.dismiss().then(() => {
          this.showErrorAlert(error);
        })
        console.log('error');
      }
    )
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
