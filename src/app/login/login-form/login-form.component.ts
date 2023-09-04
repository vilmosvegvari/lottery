import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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

  ngOnInit() {
    if (this.parentForm === undefined) {
      throw Error('Missing required Input: parentForm!');
    }
  }
}
