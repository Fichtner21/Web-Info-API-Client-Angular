import { Component, OnInit } from '@angular/core';
import { Color } from '../model/color';
import { WebsiteService } from '../website.service';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.scss']
})
export class WebsiteListComponent implements OnInit {
  public colors: Color[];

  constructor(private colorsService: WebsiteService) { }

  async ngOnInit(): Promise<void> {
    const colors = await this.colorsService.getColors();
    this.colors = colors;
  }

}
