import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonPlanDashboardComponent } from './lesson-plan-dashboard.component';

describe('LessonPlanDashboardComponent', () => {
  let component: LessonPlanDashboardComponent;
  let fixture: ComponentFixture<LessonPlanDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonPlanDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonPlanDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
