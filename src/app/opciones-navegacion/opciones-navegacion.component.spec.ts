import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesNavegacionComponent } from './opciones-navegacion.component';

describe('OpcionesNavegacionComponent', () => {
  let component: OpcionesNavegacionComponent;
  let fixture: ComponentFixture<OpcionesNavegacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpcionesNavegacionComponent]
    });
    fixture = TestBed.createComponent(OpcionesNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
