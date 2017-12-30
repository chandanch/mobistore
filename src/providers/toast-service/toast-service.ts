import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

/*
  Generated class for the ToastServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToastServiceProvider {

  constructor(public http: HttpClient, private toastController: ToastController) {
  }

  public showToast(message: string) {
    let toast = this.toastController.create({
      message: message, 
      duration: 3000
    })
    toast.present();
  }

}
