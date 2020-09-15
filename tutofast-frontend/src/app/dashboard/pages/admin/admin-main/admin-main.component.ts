import { Component, OnInit } from '@angular/core';
import {TestService} from '../../../../security/services/test.service';
import {UserService} from '../../../services/user.service';
import {UserPage} from '../../../models/user';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {

  userPage: UserPage;
  selectedPage = 0;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.ListUser(this.selectedPage);
  }

  ListUser(page: number): void {
    this.userService.getUser(page).subscribe(
      page => this.userPage = page);
  }

  onSelect(page: number): void {
    this.selectedPage = page;
    this.ListUser(page);
  }
}
