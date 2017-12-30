import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhonelistPage');
    this.loadData();
    this.httpService.get('assets/phones.json').subscribe(
      data => {
        console.log('From service', data); 
      }
    )
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
