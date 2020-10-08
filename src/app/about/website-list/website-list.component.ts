import { Component, OnInit } from '@angular/core';
import { Webinfo } from '../model/webinfo';
import { FromfileService } from '../fromfile.service';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.scss']
})
export class WebsiteListComponent implements OnInit {
  public webinfos: Webinfo[];

  constructor(private fromfileService: FromfileService) { }

  async ngOnInit(): Promise<void> {
    const webinfos = await this.fromfileService.getWebsites();
    this.webinfos = webinfos;
  }

}
