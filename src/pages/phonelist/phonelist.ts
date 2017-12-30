import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhonelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-phonelist',
  templateUrl: 'phonelist.html',
})
export class PhonelistPage {

  public phoneList;

  constructor(public navCtrl: NavController, 
    private http: HttpClient,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhonelistPage');
    this.loadData();
  }

  loadData() {
    this.http.get('assets/phones.json').subscribe(
      data => {
        console.log('data', data);
        this.phoneList = data;
      }
    )
  }

}
