import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadietaComponent } from './listadieta.component';

describe('ListadietaComponent', () => {
  let component: ListadietaComponent;
  let fixture: ComponentFixture<ListadietaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadietaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
