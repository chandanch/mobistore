import { Injectable } from '@angular/core';

/*
  Generated class for the TextResourceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TextResourceProvider {

  public textHeadings;

  constructor() {
    console.log('Hello TextResourceProvider Provider');
    this.textHeadings = {
      name: 'MobiStore App',
      signout: 'Signout from app'
    }
  }

}
