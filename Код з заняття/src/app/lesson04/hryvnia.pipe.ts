import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hryvnia'
})
export class HryvniaPipe implements PipeTransform {

  transform(value: number, symbolNarrow?: string): string {
    if(!value) return '';
    if(!symbolNarrow) return value + ' ₴'
    return value + ' ' + symbolNarrow;
  }
// ₴
}
