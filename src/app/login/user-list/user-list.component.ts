import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../+state/user.reducer';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  @Output() userSelected = new EventEmitter<User>();
  userList: User[] = [{ userId: 'id', userName: 'name', password: 'pw' }];
}
