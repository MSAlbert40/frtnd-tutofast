import { Component, OnInit } from '@angular/core';
import { Plan } from '../../../models/plan';
import { PlanPage } from '../../../models/plan-page';
import { PlanService } from '../../../services/plan.service';

@Component({
  selector: 'app-admin-plan',
  templateUrl: './admin-plan.component.html',
  styleUrls: ['./admin-plan.component.css']
})
export class AdminPlanComponent implements OnInit {

  clients: Plan[];
  planPage: PlanPage;
  selectedPage: number = 0;

  constructor(private planService: PlanService) { }

  ngOnInit(): void {
    this.getPlanPage(0);
  }

  getPlanPage(page: number): void {
    this.planService.getPlanPage(page).subscribe(
      page => this.planPage = page);
  }

  onSubmit(){
    console.log(this.planPage);
  }

  onSelect(page: number): void {
    console.log("selected page: " + page);
    this.selectedPage = page;
    this.getPlanPage(page);
  }
}
