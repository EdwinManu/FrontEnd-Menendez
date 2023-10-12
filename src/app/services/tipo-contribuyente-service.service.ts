import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoContribuyente } from '../models/tipo-contribuyente';

@Injectable({
  providedIn: 'root'
})
export class TipoContribuyenteService {
  private apiUrl = 'http://localhost:5355/api/tipos-contribuyente';

  constructor(private http: HttpClient) { }

  getAllTiposContribuyente() {
    return this.http.get<TipoContribuyente[]>(this.apiUrl);
  }

  getTipoContribuyenteById(id: number) {
    return this.http.get<TipoContribuyente>(`${this.apiUrl}/${id}`);
  }

  createTipoContribuyente(tipoContribuyente: TipoContribuyente) {
    return this.http.post(this.apiUrl, tipoContribuyente);
  }

  updateTipoContribuyente(id: number, tipoContribuyente: TipoContribuyente) {
    return this.http.put(`${this.apiUrl}/${id}`, tipoContribuyente);
  }

  deleteTipoContribuyente(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
