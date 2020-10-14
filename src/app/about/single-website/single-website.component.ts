import { Component, OnInit, OnDestroy } from '@angular/core';
import { Webinfo } from '../model/webinfo';
import { ActivatedRoute } from '@angular/router';
import { FromfileService } from '../fromfile.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-website',
  templateUrl: './single-website.component.html',
  styleUrls: ['./single-website.component.scss']
})
export class SingleWebsiteComponent implements OnInit, OnDestroy {
  public webinfo: Webinfo;
  public errorMessage: string;  

  constructor(private activatedRoute: ActivatedRoute, private fromfileService:FromfileService, private location: Location) { 
    console.log(activatedRoute);    
  }

  async ngOnInit(): Promise<void> {
    const shortname: string = this.activatedRoute.snapshot.params.shortname;   
    console.log('shortname', shortname);  

    this.webinfo = await this.fromfileService.getSingleWebsite(shortname);
    console.log(this.webinfo);
    
  }

  public ngOnDestroy(): void{
    console.log('ngOnDestroy');
  }

  public goBack(): void{
    this.location.back();
    console.log('goBack()...');
  }

}
