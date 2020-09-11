import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.role = this.tokenStorage.getUser().roles;
        this.reloadPage(this.tokenStorage.getUser().roles);
        console.log(data.token);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoggedIn = true;
      }
    );
  }

  reloadPage(role): void {
    switch (role[0]){
      case 'ROLE_STUDENT': window.location.replace('/Dashboard-Student'); break;
      case 'ROLE_TEACHER': window.location.replace('/Dashboard-Teacher'); break;
      default: window.location.replace('/Dashboard-Admin');
    }
  }
}
