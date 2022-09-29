import { Pipe, PipeTransform } from '@angular/core';
import { ICar } from './lesson04.component';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arrCars: ICar[], sort: string): ICar[] {
    if(!arrCars) return [];
    if(!sort) return arrCars;
    // if(sort === 'asc') {
    //   return arrCars.sort((a, b) => {
    //     if(a.mark < b.mark) {
    //       return -1
    //     } 
    //     if(a.mark > b.mark ){
    //       return 1
    //     }
    //     return 0
    //   } );
    // }
    // return arrCars.sort((a, b) => {
    //   if(a.mark > b.mark) {
    //     return -1
    //   } 
    //   if(a.mark < b.mark ){
    //     return 1
    //   }
    //   return 0
    // } );
    if(sort === 'asc') {
      return arrCars.sort((a, b) => (a.mark > b.mark) ? 1 : ((a.mark < b.mark) ? -1 : 0))
    }
    return arrCars.sort((a, b) => (a.mark < b.mark) ?  1 : ((a.mark > b.mark) ? -1 : 0))
  }

}
