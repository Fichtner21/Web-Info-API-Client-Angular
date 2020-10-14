import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

import { Router } from '@angular/router';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
// import { AuthU } from '../login-model/auth-u.interface';
// import { AuthRes } from '../login-model/auth-res.interface';
// import { AuthRegister } from '../auth-register.interface';

@Injectable({
providedIn: 'root'
})

export class ApiService {
  redirectUrl: string;
  baseUrl:string = "http://localhost/Web-Info-API-Client-Angular/php";

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient : HttpClient) { }

  public userlogin(username, password) {
    alert(username)
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password }).pipe(map(Users => {
      this.setToken(Users[0].name);
      this.getLoggedInName.emit(true);
      return Users;
  }));
}

  public userregistration(name,email,pwd) {
    return this.httpClient.post<any>(this.baseUrl + '/register.php', { name,email, pwd }).pipe(map(Users => {
      return Users;
    }));
  }

  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }
}

// export class ApiService {
//   constructor(private httpClient: HttpClient, private router: Router){}

//   public static readonly API_URL = 'http://localhost/Web-Info-API-Client-Angular/php';

//   public isUserLogged$: BehaviorSubject<boolean> = new BehaviorSubject(
//     this.isUserLogged()
//     // !!sessionStorage.getItem('session-token'), //!! zamiana string na boolean
//   ); //to jest stream(strumień)

//   public registerUser(user: AuthRegister): Promise<unknown> {
//     return this.httpClient.post(ApiService.API_URL + '/register.php', user).toPromise();
//   }
// }