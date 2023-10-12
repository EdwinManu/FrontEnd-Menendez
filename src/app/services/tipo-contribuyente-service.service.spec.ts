import { TestBed } from '@angular/core/testing';

import { TipoContribuyenteServiceService } from './tipo-contribuyente-service.service';

describe('TipoContribuyenteServiceService', () => {
  let service: TipoContribuyenteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoContribuyenteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
