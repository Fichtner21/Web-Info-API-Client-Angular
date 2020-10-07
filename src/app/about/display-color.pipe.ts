import { Pipe, PipeTransform } from '@angular/core';
import { Color } from './model/color';

@Pipe({
  name: 'displayColor'
})
export class DisplayColorPipe implements PipeTransform {

  transform(value: Color): string {
    return `${value.name} (color of the year ${value.year})`;
  }

}