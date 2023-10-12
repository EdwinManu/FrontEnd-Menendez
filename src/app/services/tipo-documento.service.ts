import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoDocumento } from '../models/tipo-documento';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {
  private apiUrl = 'http://localhost:5355/api/tipos-documento';

  constructor(private http: HttpClient) { }

  getAllTiposDocumento() {
    return this.http.get<TipoDocumento[]>(this.apiUrl);
  }

  getTipoDocumentoById(id: number) {
    return this.http.get<TipoDocumento>(`${this.apiUrl}/${id}`);
  }

  createTipoDocumento(tipoDocumento: TipoDocumento) {
    return this.http.post(this.apiUrl, tipoDocumento);
  }

  updateTipoDocumento(id: number, tipoDocumento: TipoDocumento) {
    return this.http.put(`${this.apiUrl}/${id}`, tipoDocumento);
  }

  deleteTipoDocumento(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}