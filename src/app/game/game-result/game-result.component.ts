import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultPipe } from './result.pipe';

@Component({
  selector: 'app-game-result',
  standalone: true,
  imports: [CommonModule, ResultPipe],
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.scss'],
})
export class GameResultComponent {
  @Input() results: number[][] = [];
}
