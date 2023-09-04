import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User, UserDTO } from '../../+state/user.reducer';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  @Input() parentForm!: FormGroup<{
    userId: FormControl<string>;
    password: FormControl<string>;
  }>;

  @Output() logon = new EventEmitter<UserDTO>();
  ngOnInit() {
    if (this.parentForm === undefined) {
      throw Error('Missing required Input: parentForm!');
    }
  }

  onLogon(): void {
    const formVal = this.parentForm.value;
    if (formVal.userId !== undefined && formVal.password !== undefined) {
      this.logon.emit({ userId: formVal.userId, password: formVal.password });
    }
  }
}
