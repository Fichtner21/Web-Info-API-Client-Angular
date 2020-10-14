import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { AuthUser } from './model/auth-user.interface';
import { AuthResponse } from './model/auth-response.interface';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { 
   
  }

  public static readonly API_URL = 'https://reqres.in/api/';

  public isUserLogged$: BehaviorSubject<boolean> = new BehaviorSubject(
    this.isUserLogged()
    // !!sessionStorage.getItem('session-token'), //!! zamiana string na boolean
  ); //to jest stream(strumień)

  public registerUser(user: AuthUser): Promise<unknown> {
    return this.httpClient.post(AuthService.API_URL + 'register', user).toPromise();
  }

  public loginUser(user: AuthUser): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(AuthService.API_URL + 'login', user).pipe(
      tap((response: AuthResponse) => {
        if(response.token){
          sessionStorage.setItem('session-token', response.token);
          this.isUserLogged$.next(true);
        }
      }),
      catchError((errorResponse) =>{
        //console.log(errorResponse);
        this.isUserLogged$.next(false);
        return of(errorResponse.error);
      } )
    );
  }

  public isUserLogged(): boolean {
    return !!sessionStorage.getItem('session-token'); //!! podwojna negacja rzutowania string na booleans
  }

  public logOut(){
    sessionStorage.removeItem('session-token');
    this.isUserLogged$.next(false);
    this.router.navigateByUrl('/');
  }
}

