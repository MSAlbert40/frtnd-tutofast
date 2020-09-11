import { Component, OnInit } from '@angular/core';
import {TestService} from '../../../../security/services/test.service';

@Component({
  selector: 'app-teacher-main',
  templateUrl: './teacher-main.component.html',
  styleUrls: ['./teacher-main.component.css']
})
export class TeacherMainComponent implements OnInit {

  content: string;

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.getTeacherContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
