import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';
import { SelectedPipe } from '../selected.pipe';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, SelectedPipe],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent {
  numbers = Array.from(Array(49).keys(), (i: number) => i + 1);
  selectedNumbers: number[] = [];

  constructor(private gameService: GameService) {}

  onRandomClick() {
    this.selectedNumbers = this.gameService.generateNumbers(6);
  }

  onDeleteClick() {
    this.selectedNumbers = [];
  }

  onNumberClick(number: number) {
    if (this.selectedNumbers.includes(number)) {
      this.selectedNumbers = this.selectedNumbers.filter((e) => e !== number);
    } else {
      this.selectedNumbers = [...this.selectedNumbers, number];
    }
  }
}
