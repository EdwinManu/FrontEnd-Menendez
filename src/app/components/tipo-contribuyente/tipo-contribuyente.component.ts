import { Component, OnInit } from '@angular/core';
import { TipoContribuyenteService } from '../../services/tipo-contribuyente-service.service';
import { TipoContribuyente } from '../../models/tipo-contribuyente';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tipo-contribuyente',
  templateUrl: './tipo-contribuyente.component.html',
  styleUrls: ['./tipo-contribuyente.component.css']
})

export class TipoContribuyenteComponent implements OnInit {
  tiposContribuyente: TipoContribuyente[] = [];
  selectedTipoContribuyente: TipoContribuyente = new TipoContribuyente();
  isEditing: boolean = false;

  constructor(private tipoContribuyenteService: TipoContribuyenteService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadTiposContribuyente();
  }

  loadTiposContribuyente(): void {
    this.tipoContribuyenteService.getAllTiposContribuyente().subscribe(data => {
      this.tiposContribuyente = data;
    }, error => {
      console.error('Error al cargar los tipos de contribuyente:', error);
    });
  }

  startEditing(tipoContribuyente: TipoContribuyente): void {
    this.selectedTipoContribuyente = Object.assign({}, tipoContribuyente);
    this.isEditing = true;
  }

  cancelEditing(): void {
    this.isEditing = false;
    this.selectedTipoContribuyente = new TipoContribuyente();
  }

  createTipoContribuyente(): void {
    this.tipoContribuyenteService.createTipoContribuyente(this.selectedTipoContribuyente).subscribe(() => {
      this.loadTiposContribuyente();
      this.cancelEditing();
    }, error => {
      console.error('Error al crear el tipo de contribuyente:', error);
    });
  }

  updateTipoContribuyente(): void {
    this.tipoContribuyenteService.updateTipoContribuyente(this.selectedTipoContribuyente.idTipoContribuyente!, this.selectedTipoContribuyente).subscribe(() => {
      this.loadTiposContribuyente();
      this.cancelEditing();
    }, error => {
      console.error('Error al actualizar el tipo de contribuyente:', error);
    });
  }

  deleteTipoContribuyente(id: number): void {
    this.tipoContribuyenteService.deleteTipoContribuyente(id).subscribe(() => {
      this.loadTiposContribuyente();
    }, error => {
      console.error('Error al eliminar el tipo de contribuyente:', error);
    });
  }

  addNewContribuyente(){
    this.router.navigate(["/agregarContribuyente"])

  }

  regresar2(){
    this.router.navigate(["/opciones"])

  }
}
