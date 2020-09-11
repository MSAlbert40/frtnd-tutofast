import { Component, OnInit } from '@angular/core';
import {TestService} from '../../../../security/services/test.service';

@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.css']
})
export class StudentMainComponent implements OnInit {

  content: string;

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.getStudentContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
