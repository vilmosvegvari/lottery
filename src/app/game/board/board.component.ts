import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  numbers = Array.from(Array(49).keys(), (i: number) => i + 1);

  constructor(private gameService: GameService) {}

  onRandomClick() {}

  onDeleteClick() {}

  onNumberClick(number: number) {
    // check the number
  }
}
