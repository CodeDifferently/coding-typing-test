import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallActionCardComponent } from './small-action-card.component';

describe('SmallActionCardComponent', () => {
  let component: SmallActionCardComponent;
  let fixture: ComponentFixture<SmallActionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallActionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallActionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
