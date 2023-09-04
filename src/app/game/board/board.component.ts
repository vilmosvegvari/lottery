import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';
import { SelectedPipe } from '../selected.pipe';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, SelectedPipe],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BoardComponent),
      multi: true,
    },
  ],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent {
  numbers = Array.from(Array(49).keys(), (i: number) => i + 1);
  selectedNumbers: number[] = [];

  onChange = (selectedNumbers: number[]) => {};
  onTouched = () => {};

  constructor(private gameService: GameService) {}

  onRandomClick() {
    this.selectedNumbers = this.gameService.generateNumbers(6);
    this.emitChanges();
  }

  onDeleteClick() {
    this.selectedNumbers = [];
    this.emitChanges();
  }

  onNumberClick(number: number) {
    if (this.selectedNumbers.includes(number)) {
      this.selectedNumbers = this.selectedNumbers.filter((e) => e !== number);
    } else {
      this.selectedNumbers = [...this.selectedNumbers, number];
    }
    this.emitChanges();
  }

  registerOnChange(onChange: (onChange: number[]) => void): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  writeValue(value: number[]): void {
    this.selectedNumbers = value;
  }

  private emitChanges(): void {
    this.onChange(this.selectedNumbers);
  }
}
