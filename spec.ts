import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecComponent } from './spec.component';

describe('SpecComponent', () => {
  let component: SpecComponent;
  let fixture: ComponentFixture<SpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
