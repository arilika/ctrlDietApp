import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadComponent } from './cantidad.component';

describe('CantidadComponent', () => {
  let component: CantidadComponent;
  let fixture: ComponentFixture<CantidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
