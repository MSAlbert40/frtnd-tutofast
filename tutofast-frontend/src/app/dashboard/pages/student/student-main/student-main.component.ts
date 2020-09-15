import { Component, OnInit } from '@angular/core';
import {TestService} from '../../../../security/services/test.service';
import {UserService} from '../../../services/user.service';
import {UserPage} from '../../../models/user';

@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.css']
})
export class StudentMainComponent implements OnInit {

  teacherPage: UserPage;
  selectedPage = 0;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.ListTeachers(this.selectedPage);
  }

  ListTeachers(page: number): void{
    this.userService.getUser(page).subscribe(page => this.teacherPage = page);
  }

  onSelect(page: number): void {
    this.selectedPage = page;
    this.ListTeachers(page);
  }
}
