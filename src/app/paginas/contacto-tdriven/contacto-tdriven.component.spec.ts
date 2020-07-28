import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoTDrivenComponent } from './contacto-tdriven.component';

describe('ContactoTDrivenComponent', () => {
  let component: ContactoTDrivenComponent;
  let fixture: ComponentFixture<ContactoTDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoTDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoTDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
