import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidcourseComponent } from './paidcourse.component';

describe('PaidcourseComponent', () => {
  let component: PaidcourseComponent;
  let fixture: ComponentFixture<PaidcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
