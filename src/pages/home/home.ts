import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { LoginModal } from './../login-modal/login-modal';
import { Labels } from './../../utilities/labels'; 
import { SignupModalPage } from './../signup-modal/signup-modal';
import { ActionSheetController } from 'ionic-angular/components/action-sheet/action-sheet-controller';
import { TextResourceProvider } from '../../providers/text-resource/text-resource';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController, 
              public labels: Labels,
              private actionSheetController: ActionSheetController,
              private modalController: ModalController,
              private textResource: TextResourceProvider) {
                console.log('Text', this.textResource.textHeadings.signout);
  }

  showLoginForm() {
    let loginModal = this.modalController.create(LoginModal);
    loginModal.present();
  }

  showSignupForm() {
    let signupModal = this.modalController.create(SignupModalPage);
    signupModal.present();
  }

  showActionSheet() {
    let actionSheet = this.actionSheetController.create({
      title: 'Set your app',
      buttons: [
        {
          text: 'Change theme',
          icon: 'shirt'
        },
        {
          text: 'Dark mode',
          icon: 'moon'
        },
        {
          text: 'Light mode',
          icon: 'sunny'
        },
        {
          text: 'Cancel',
          role: 'destructive'
        }
      ]
    })
    actionSheet.present();
  }

}
