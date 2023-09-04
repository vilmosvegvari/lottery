import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../services/game.service';
import { BoardComponent } from './board/board.component';
import { GameResultComponent } from './game-result/game-result.component';
import { GameActionsComponent } from './game-actions/game-actions.component';
import { FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BoardComponent,
    GameResultComponent,
    GameActionsComponent,
  ],
  providers: [GameService],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export default class GameComponent implements OnInit {
  numberOfBoards = 4;
  showResults = false;
  results: number[][] = [];

  boardArray = new FormArray<FormControl<number[]>>([]);

  ngOnInit(): void {
    for (let i = 0; i < this.numberOfBoards; i++) {
      this.boardArray.push(this.createboardElement());
    }
  }

  onPlayClick(): void {
    this.showResults = true;
    // if we would bind the form value it would show live results
    this.results = this.boardArray.value;
  }

  onAddBoard() {
    this.boardArray.push(this.createboardElement());
  }

  onRemoveBoard() {
    this.boardArray.removeAt(this.boardArray.length - 1);
  }

  private createboardElement(): FormControl<number[]> {
    return new FormControl<number[]>([], { nonNullable: true });
  }
}
