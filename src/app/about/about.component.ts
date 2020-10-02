import { Component, OnInit } from '@angular/core';
import { InfotestService } from './infotest.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  artistName: String;
  version: String;
  resZgierz: Object;

  panelOpenState = false;

  constructor(private _infotest: InfotestService) { }

  ngOnInit(): void {
    this._infotest.getTop3Artists().subscribe(res => {
      console.log(res);
      this.artistName = res.message.body['artist_list'].map(res => res.artist.artist_name);
    })

    this._infotest.getInfoNysa().subscribe(res => {      
     console.log(res);
     this.resZgierz = res;
     this.version = res.version;
    },(err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
            console.log('Client-side error occured.');
        } else {
            console.log('Server-side error occured.');
        }
      }   
    )    
  }
}
