import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Weather1Component } from './weather1.component';

describe('Weather1Component', () => {
  let component: Weather1Component;
  let fixture: ComponentFixture<Weather1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Weather1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Weather1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
