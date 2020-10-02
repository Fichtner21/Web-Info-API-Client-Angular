import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfotestService {

  public API_URL_3_CHART = "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=3&country=it&apikey=6bc8e4e006c6670df9b11cdeea097920"; 

  public API_INFO_ZGIERZ = "https://cors-anywhere.herokuapp.com/http://portal.zgierz.pl/wp-json/website_info/v1/website-details/";  

  constructor(private _http: HttpClient) { }

  getTop3Artists(): Observable<any>{
    return this._http.get(this.API_URL_3_CHART).pipe(
      map((result) => result)
    )
  }

  getInfoNysa(): Observable<any>{
    let headers = new HttpHeaders()
    headers=headers.set('username', 'ernest.fichtner')
    .set('password', 'oB$R*hYQaI(AKQDGbh7E7MZ&')
    .set('Content-type', 'application/json');
    //headers=headers.set('Access-Control-Allow-Origin', 'http://portal.zgierz.pl');   
    //console.log(headers.lazyUpdate);

    return this._http.get(this.API_INFO_ZGIERZ,{headers: headers}).pipe(
      map((result) => result)      
    )
  }  

  

  
  // getInfo(){
  //   console.log('HEADERS: ', this.headers.keys());
  // }
}
