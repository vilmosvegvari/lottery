import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../services/game.service';
import { BoardComponent } from './board/board.component';
import { GameResultComponent } from './game-result/game-result.component';
import { GameActionsComponent } from './game-actions/game-actions.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule,
    BoardComponent,
    GameResultComponent,
    GameActionsComponent,
  ],
  providers: [GameService],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export default class GameComponent {
  boards = [1, 2, 3, 4];

  showResults = false;

  onPlayClick(): void {
    this.showResults = true;
  }
}
