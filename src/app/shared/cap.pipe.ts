import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cap'
})
export class CapPipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      return value.split(' ').map(v => v.charAt(0).toUpperCase() + v.slice(1)).join(' ');
    }
    return value;
  }
}
