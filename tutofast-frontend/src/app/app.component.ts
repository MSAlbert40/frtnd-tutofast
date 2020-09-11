import { Component } from '@angular/core';
import { TokenStorageService } from './security/services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showTeacherBoard = false;
  showStudentBoard = false;
  showAdminPlanAdministration = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showAdminPlanAdministration = this.roles.includes('ROLE_ADMIN');
      this.showTeacherBoard = this.roles.includes('ROLE_TEACHER');
      this.showStudentBoard = this.roles.includes('ROLE_STUDENT');
      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
