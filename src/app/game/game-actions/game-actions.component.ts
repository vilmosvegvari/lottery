import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-actions.component.html',
  styleUrls: ['./game-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameActionsComponent {
  @Output() play = new EventEmitter<void>();
}
