import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerUsuarioComponent } from './obtener-usuario.component';

describe('ObtenerUsuarioComponent', () => {
  let component: ObtenerUsuarioComponent;
  let fixture: ComponentFixture<ObtenerUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObtenerUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtenerUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
