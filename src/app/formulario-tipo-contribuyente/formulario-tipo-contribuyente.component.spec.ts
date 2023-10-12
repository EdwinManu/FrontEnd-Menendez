import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTipoContribuyenteComponent } from './formulario-tipo-contribuyente.component';

describe('FormularioTipoContribuyenteComponent', () => {
  let component: FormularioTipoContribuyenteComponent;
  let fixture: ComponentFixture<FormularioTipoContribuyenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioTipoContribuyenteComponent]
    });
    fixture = TestBed.createComponent(FormularioTipoContribuyenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
