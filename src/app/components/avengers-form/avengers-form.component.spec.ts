import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvengersFormComponent } from './avengers-form.component';

describe('AvengersFormComponent', () => {
  let component: AvengersFormComponent;
  let fixture: ComponentFixture<AvengersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvengersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvengersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
