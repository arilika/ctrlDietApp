import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoaguaComponent } from './calculoagua.component';

describe('CalculoaguaComponent', () => {
  let component: CalculoaguaComponent;
  let fixture: ComponentFixture<CalculoaguaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculoaguaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculoaguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
