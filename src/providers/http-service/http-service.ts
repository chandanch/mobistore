import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '@firebase/util';

/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpService {

  constructor(public http: HttpClient) {
    console.log('Hello HttpServiceProvider Provider');
  }

  get(url : string) {
    return this.http.get(url);
  }

}
