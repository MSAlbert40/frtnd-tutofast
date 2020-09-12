import { Component, OnInit } from '@angular/core';
import {PlanService} from '../../../services/plan.service';
import {Plan} from '../../../models/plan';
import {PlanPage} from '../../../models/plan-page';


@Component({
  selector: 'app-plans-administration',
  templateUrl: './plans-administration.component.html',
  styleUrls: ['./plans-administration.component.css']
})
export class PlansAdministrationComponent implements OnInit {
  clients: Plan[];
  planPage: PlanPage;
  selectedPage: number = 0;

  constructor(private planService: PlanService) {}

  ngOnInit() {
    //this.getClient();

    this.getPlanPage(0);

    //console.log(this.planPage.numberOfElements)
  }

  getPlanPage(page:number): void {
    this.planService.getPlanPage(page)
      .subscribe(page => this.planPage = page);
  }

  onSubmit(){
    console.log(this.planPage);
  }

  onSelect(page: number): void {
    console.log("selected page : "+page);
    this.selectedPage=page;
    this.getPlanPage(page);
    // window.location.reload();
  }
}
