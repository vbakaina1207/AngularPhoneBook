import { Pipe, PipeTransform } from '@angular/core';
import { ICar } from './lesson04.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arrCars: ICar[], field: string): ICar[] {
    if(!arrCars) return [];
    if(!field) return arrCars;
    return arrCars.filter(car => car.mark.toLowerCase().includes(field.toLowerCase()));
  }

}
