import { Injectable } from '@angular/core';
//import { Http, Headers } from '@angular/http';
//import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { ServiceProvider } from '../providers/service/service';

@Injectable()
export class AuthService {
   userName: string;
   loggedIn: boolean;

   constructor(private _service: ServiceProvider) {
    this.userName = '';
    this.loggedIn = false;
 }
 
 login(userInfo) {
  
    this._service
    .getMinhasPlantas()
    .then(retorno => {
      if (retorno){
        this.userName = userInfo.user;
        this.loggedIn = true;
      }else{
        this.loggedIn = false;
      }
      return this.loggedIn;
    });
 }
 /*antigo
 login(userInfo) {
    let url = `${this.url}`;
    let iJon = JSON.stringify(userInfo);

    return this.http.post(url, iJon, {
       headers: new Headers({
          'Content-Type':'application/json'
       })
    })
    .map(res => res.text())
    .map(res => {
       if (res=="error" || res=="nofound"){
          this.loggedIn = false;
       } else {
          localStorage.setItem('token', res);
          this.userName = userInfo.user;
          this.loggedIn = true;
       }
       return this.loggedIn;
    });
 }
*/
 logout(): void {
    localStorage.removeItem('token');
    this.userName = '';
    this.loggedIn = false;
 }

 isLoggedIn() {
    return this.loggedIn;
 }
}