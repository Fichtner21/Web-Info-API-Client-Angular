import { Component, OnInit } from '@angular/core';
import { InfotestService } from './infotest.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import * as _ from 'lodash';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  artistName: String;
  version: String;
  resZgierz: Object;
  resRzepin: Object;
  resFrombork: Object;
  transient: Object;
  transientLastChecked: any;

  panelOpenState = false;

  constructor(private _infotest: InfotestService) { }

  ngOnInit(): void {
    this._infotest.getTop3Artists().subscribe(res => {
      this.artistName = res.message.body['artist_list'].map(res => res.artist.artist_name);
    })

    this._infotest.getInfoZgierz().subscribe(res => {      
    //  console.log(res);
     this.resZgierz = res;
     this.version = res.version;
    },(err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
            console.log('Client-side error occured.');
        } else {
            console.log('Server-side error occured.');
        }
      }   
    );
    
    this._infotest.getInfoRzepin().subscribe(res => {
      // console.log(res);
       this.resRzepin = res;
       this.version = res.version;
      },(err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
              console.log('Client-side error occured.');
          } else {
              console.log('Server-side error occured.');
          }
        }   
      );

      this._infotest.getInfoFrombork().subscribe(res => {       
        //const arr = [];
        //const arr2 = [];
        this.resFrombork = res;
        this.version = res.version;
        this.transient = res.transient;
        console.log(res.transient['1']);  
        console.log('ALL PLUGINS',res.transient['1'].checked);
        const allPlugins = res.transient['1'].checked;
        console.log('TO UPDATE', res.transient['1'].response); 
        const allToUpdate = res.transient['1'].response;
        
        const toCompareObj = {};
        for(const [key, value] of Object.entries(allToUpdate)){
          toCompareObj[key] = value['new_version']
        }
        console.log(toCompareObj);
        //console.log(_.diffrence(_.))
        // console.log('allPlugins keys', Object.keys(allPlugins));
        // console.log('allPlugins values', Object.values(allPlugins));
        // const arrAllPluginsKeys = Object.keys(allPlugins);
        // const arrAllPluginsValues = Object.values(allPlugins);
        // const arrAllToUpdate = Object.values(allToUpdate);
        // const conAllPlugins = _.zip(arrAllPluginsKeys, arrAllPluginsValues);
        // console.log('conAllPlugins', conAllPlugins);
        // console.log('arrAllToUpdate', arrAllToUpdate);
        // var resultArr = Object.keys([0]).map(function(index){
        //   let plugin = 
        // });        

        let transLastChecked = new Date(res.transient['0'].last_checked * 1000);
        this.transientLastChecked = transLastChecked.toLocaleTimeString('pl', {month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', weekday: 'long'});
        console.log(this.transientLastChecked);
        },(err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            } else {
                console.log('Server-side error occured.');
            }
          }   
        );
  }
}
