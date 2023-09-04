import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { BehaviorSubject } from 'rxjs';
import { User } from '../+state/user.reducer';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectRegistered } from '../+state/user.selectors';
import { UserListService } from '../services/user-list.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AlertComponent,
    LoginFormComponent,
    UserListComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {
  //could be in store as well
  error$ = new BehaviorSubject<string | null>(null);

  userList$ = this.userListService.userList;

  form = new FormGroup({
    userId: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
  });

  constructor(private userListService: UserListService) {}

  onUserSelected(user: User): void {
    this.form.patchValue({ userId: user.userId });
  }

  onLogon(user: Partial<User>): void {
    // try to log in
  }
}
