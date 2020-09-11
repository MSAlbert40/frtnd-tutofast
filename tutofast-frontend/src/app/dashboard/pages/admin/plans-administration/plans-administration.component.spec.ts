import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansAdministrationComponent } from './plans-administration.component';

describe('PlansAdministrationComponent', () => {
  let component: PlansAdministrationComponent;
  let fixture: ComponentFixture<PlansAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
