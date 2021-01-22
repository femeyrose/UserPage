import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Weather4Component } from './weather4.component';

describe('Weather4Component', () => {
  let component: Weather4Component;
  let fixture: ComponentFixture<Weather4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Weather4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Weather4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
