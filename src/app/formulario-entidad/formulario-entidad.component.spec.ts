import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEntidadComponent } from './formulario-entidad.component';

describe('FormularioEntidadComponent', () => {
  let component: FormularioEntidadComponent;
  let fixture: ComponentFixture<FormularioEntidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioEntidadComponent]
    });
    fixture = TestBed.createComponent(FormularioEntidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
