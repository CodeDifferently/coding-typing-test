import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeActionCardComponent } from './large-action-card.component';

describe('LargeActionCardComponent', () => {
  let component: LargeActionCardComponent;
  let fixture: ComponentFixture<LargeActionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeActionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeActionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
