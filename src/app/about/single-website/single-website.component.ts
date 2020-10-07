import { Component, OnInit, OnDestroy } from '@angular/core';
import { Color } from '../model/color';
import { ActivatedRoute } from '@angular/router';
import { WebsiteService } from '../website.service';


@Component({
  selector: 'app-single-website',
  templateUrl: './single-website.component.html',
  styleUrls: ['./single-website.component.scss']
})
export class SingleWebsiteComponent implements OnInit, OnDestroy {
  public colorName: string;
  public errorMessage: string;

  constructor(private activatedRoute: ActivatedRoute, private colorsService:WebsiteService) { }

  async ngOnInit(): Promise<void> {
    const id: string = this.activatedRoute.snapshot.params.id;
    const colorId: number = Number.parseInt(id, 10);

    const color: Color = await this.colorsService.getSingleColor(colorId);
    console.log('color',color);
    this.colorName = color.name;
  }

  public ngOnDestroy(): void{
    console.log('ngOnDestroy');
  }

}
