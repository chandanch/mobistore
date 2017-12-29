import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@Component({
  selector: 'page-signup-modal',
  templateUrl: 'signup-modal.html',
})
export class SignupModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewController: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupModalPage');
  }

  dismissModal() {
    this.viewController.dismiss();
  }

}
