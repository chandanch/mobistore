import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as firebase from "firebase";
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

import { HttpService } from '../../providers/http-service/http-service';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


@Component({
  selector: 'page-phonelist',
  templateUrl: 'phonelist.html',
  providers: [HttpService]
})
export class PhonelistPage {

  public phoneList;

  constructor(public navCtrl: NavController, 
    private http: HttpClient,
    private httpService: HttpService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhonelistPage');
    this.loadData();
    
  }

  loadData() {
    // subscribe to the http event stream
    this.httpService.get('assets/phones.json').subscribe(
      data => {
        this.phoneList = data;
      }
    )
  }

  signout() {
    // first show prompt to the user for signout
    let signoutAlert = this.alertController.create({
      title: 'User Signout',
      message: 'Are you sure you want to signout?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log('signout');
            this.firebaseSignout();
          }
        },
        {
          text: 'No',
          role: 'cancel'

        }
      ]
    })
    signoutAlert.present();
  }

  /**
   * @desc signout the user from the firebase
   */
  firebaseSignout() {
    let loading = this.loadingController.create({
      spinner: 'bubbles',
      content: 'Signing out...'
    })
    // call firebase signout once the loading is presented
    loading.present().then(() => {
      firebase.auth().signOut().then(
        success => {
          // on success dismiss the loading
          console.log('Signed out');
          // show login screen once after successfull logout & loading dismiss
          loading.dismiss().then(() => {
            this.homepage();
          });
        },
        error => {
          console.log('Error while signing out');
          loading.dismiss();
        }
      )
    })
  }

  homepage() {
    this.navCtrl.pop();
  }

}
