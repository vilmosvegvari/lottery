import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { BehaviorSubject } from 'rxjs';
import { User, UserDTO } from '../+state/user.reducer';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserListService } from '../services/user-list.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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

  constructor(
    private userListService: UserListService,
    private authService: AuthService,
    private router: Router,
  ) {}

  onUserSelected(user: User): void {
    this.form.patchValue({ userId: user.userId });
  }

  onLogon(user: UserDTO): void {
    this.authService.checkUser(user).subscribe(({ success }) => {
      if (success) {
        this.error$.next(null);
        this.router.navigate(['game']);
      } else {
        this.error$.next('Log on not successful!');
      }
    });
  }
}
