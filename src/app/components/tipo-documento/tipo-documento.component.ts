import { Component, OnInit } from '@angular/core';
import { TipoDocumentoService } from '../../services/tipo-documento.service';
import { TipoDocumento } from '../../models/tipo-documento';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tipo-documento',
  templateUrl: './tipo-documento.component.html',
  styleUrls: ['./tipo-documento.component.css']
})
export class TipoDocumentoComponent implements OnInit {
  tiposDocumento: TipoDocumento[] = [];
  selectedTipoDocumento: TipoDocumento = new TipoDocumento();
  isEditing: boolean = false;

  constructor(private tipoDocumentoService: TipoDocumentoService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadTiposDocumento();
  }

  loadTiposDocumento(): void {
    this.tipoDocumentoService.getAllTiposDocumento().subscribe(data => {
      this.tiposDocumento = data;
    }, error => {
      console.error('Error al cargar los tipos de documento:', error);
    });
  }

  deleteTipoDocumento(id: number): void {
    this.tipoDocumentoService.deleteTipoDocumento(id).subscribe(() => {
      this.loadTiposDocumento(); // Recarga la lista después de eliminar
    }, error => {
      console.error('Error al eliminar el tipo de documento:', error);
    });
  }
  
  createTipoDocumento(): void {
    this.tipoDocumentoService.createTipoDocumento(this.selectedTipoDocumento).subscribe(data => {
      this.loadTiposDocumento();
    }, error => {
      console.error('Error al crear el tipo de documento:', error);
    });
  }

  updateTipoDocumento(): void {
    this.tipoDocumentoService.updateTipoDocumento(this.selectedTipoDocumento.idTipoDocumento!, this.selectedTipoDocumento).subscribe(data => {
      this.loadTiposDocumento();
    }, error => {
      console.error('Error al actualizar el tipo de documento:', error);
    });
  }

  startEditing(tipoDocumento: TipoDocumento): void {
    this.selectedTipoDocumento = Object.assign({}, tipoDocumento);
    this.isEditing = true;
  }

  addNewDocumento(){
    this.router.navigate(["/agregarDocumento"])
  }

  regresar(){
    this.router.navigate(["/opciones"])
  }

}
