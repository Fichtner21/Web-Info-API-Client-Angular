import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Color } from './model/color';

const COLOR = [{
  id: 1,
  name: 'red',
  color: '#ff5733',
  year: 1990
}, {
  id: 2,
  name: 'green',
  color: '#00c853',
  year: 1991  
}]

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {
  //private static readonly API_URL = COLOR;

  constructor() { }

  public async getColors(): Promise<Color[]> {
    return COLOR;
  }

  public async getSingleColor(id: number): Promise<Color>{
    return COLOR.filter((color: Color) => id === color.id)[0];
  }

  public async getSingleName(name: string): Promise<Color>{
    return COLOR.filter((color: Color) => name === color.name)[0];
  }
}
