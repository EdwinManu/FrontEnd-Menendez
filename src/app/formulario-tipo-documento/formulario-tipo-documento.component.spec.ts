import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTipoDocumentoComponent } from './formulario-tipo-documento.component';

describe('FormularioTipoDocumentoComponent', () => {
  let component: FormularioTipoDocumentoComponent;
  let fixture: ComponentFixture<FormularioTipoDocumentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioTipoDocumentoComponent]
    });
    fixture = TestBed.createComponent(FormularioTipoDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
