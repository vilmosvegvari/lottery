import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selected',
  standalone: true,
})
export class SelectedPipe implements PipeTransform {
  transform(selectedNumbers: number[], number: number): boolean {
    return selectedNumbers.includes(number);
  }
}
