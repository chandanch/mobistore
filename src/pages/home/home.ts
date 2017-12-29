

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { LoginModal } from './../login-modal/login-modal';
import { Labels } from './../../utilities/labels';
import { SignupModalPage } from './../signup-modal/signup-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
              private labels: Labels,
              private modalController: ModalController) {
  }

  showLoginForm() {
    let loginModal = this.modalController.create(LoginModal);
    loginModal.present();
  }

  showSignupForm() {
    let signupModal = this.modalController.create(SignupModalPage);
    signupModal.present();
  }

}
