import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  selectedRole: string;
  roleOptions: string[] = ['Student', 'Teacher', 'Admin'];

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {}

  onSubmit(): void {
    this.authService.register(this.form, this.selectedRole).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
