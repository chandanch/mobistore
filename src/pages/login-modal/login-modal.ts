import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@Component({
  selector: 'page-login-modal',
  templateUrl: 'login-modal.html',
})
export class LoginModal {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewController: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginModalPage');
  }

  dismissModal() {
    this.viewController.dismiss();
  }

}
