import { Component, OnInit } from '@angular/core';
import {TestService} from '../../../../security/services/test.service';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {

  content: string;

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.getAdminContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
