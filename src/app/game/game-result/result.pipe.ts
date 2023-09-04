import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'result',
  standalone: true,
})
export class ResultPipe implements PipeTransform {
  transform(value: number[]): string {
    if (value.length === 6) {
      return value.join(', ');
    } else if (value.length === 0) {
      return 'Empty';
    } else if (value.length > 6) {
      return `Error: Please remove ${value.length - 6} mark`;
    } else {
      return `Error: ${6 - value.length} marks are missing`;
    }
  }
}
