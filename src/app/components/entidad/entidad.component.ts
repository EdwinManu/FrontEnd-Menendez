import { Component, OnInit } from '@angular/core';
import { EntidadService } from '../../services/entidad.service';
import { Entidad } from '../../models/entidad';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entidad',
  templateUrl: './entidad.component.html',
  styleUrls: ['./entidad.component.css']
})
export class EntidadComponent implements OnInit {
  entidades: Entidad[] = [];
  selectedEntidad: Entidad = new Entidad();
  isEditing: boolean = false;

  constructor(private entidadService: EntidadService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loadEntidades();
  }

  loadEntidades(): void {
    this.entidadService.getAllEntidades().subscribe(data => {
      this.entidades = data;
    }, error => {
      console.error('Error al cargar las entidades:', error);
    });
  }

  startEditing(entidad: Entidad): void {
    this.selectedEntidad = Object.assign({}, entidad);
    this.isEditing = true;
  }

  cancelEditing(): void {
    this.isEditing = false;
    this.selectedEntidad = new Entidad();
  }

  createEntidad(): void {
    this.entidadService.createEntidad(this.selectedEntidad).subscribe(() => {
      this.loadEntidades();
      this.cancelEditing();
    }, error => {
      console.error('Error al crear la entidad:', error);
    });
  }

  updateEntidad(id: any): void {
    /* this.entidadService.updateEntidad(this.selectedEntidad.idEntidad!, this.selectedEntidad).subscribe(() => {
      this.loadEntidades();
      this.cancelEditing();
    }, error => {
      console.error('Error al actualizar la entidad:', error);
    }); */
    this.router.navigate([`/agregarEntidad/${id}`])
  }

  deleteEntidad(id: number): void {
    this.entidadService.deleteEntidad(id).subscribe(() => {
      this.loadEntidades();
    }, error => {
      console.error('Error al eliminar la entidad:', error);
    });
  }

  addNewEntity(){
    this.router.navigate(["/agregarEntidad"])
  }

  regresar3(){
    this.router.navigate(["/opciones"])
  }
}
