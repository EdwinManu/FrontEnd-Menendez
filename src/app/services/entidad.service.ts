import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entidad } from '../models/entidad';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {
  private apiUrl = 'http://localhost:5355/api/entidades';

  constructor(private http: HttpClient) { }

  getAllEntidades() {
    return this.http.get<Entidad[]>(this.apiUrl);
  }

  getEntidadById(id: number) {
    return this.http.get<Entidad>(`${this.apiUrl}/${id}`);
  }

  createEntidad(entidad: Entidad) {
    return this.http.post(this.apiUrl, entidad);
  }

  updateEntidad(id: number, entidad: Entidad) {
    return this.http.put(`${this.apiUrl}/${id}`, entidad);
  }

  deleteEntidad(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}