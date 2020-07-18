import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroserviciosComponent } from './introservicios.component';

describe('IntroserviciosComponent', () => {
  let component: IntroserviciosComponent;
  let fixture: ComponentFixture<IntroserviciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroserviciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
