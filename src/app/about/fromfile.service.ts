import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Webinfo } from './model/webinfo';
import { WebsiteListResponse } from './model/website-list-response';
import { SingleWebsiteResponse } from './model/single-website-response';
import { map, filter, flatMap} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FromfileService {
  private static readonly API_WEBSITES = '/assets/websites/websites.json';  
  
  constructor(private httpClient: HttpClient) { }

  public async getWebsites(): Promise<Webinfo[]> {
    const response = await this.httpClient.get<WebsiteListResponse>(FromfileService.API_WEBSITES).toPromise();
    return response.data;
  }  

  public async getSingleWebsite(shortname: string): Promise<Webinfo>{
   const response = await this.httpClient.get<WebsiteListResponse>(FromfileService.API_WEBSITES).pipe(flatMap(jsonContent => jsonContent.data),filter(data => data.shortname === shortname)).toPromise();
   return response;
  } 
}
