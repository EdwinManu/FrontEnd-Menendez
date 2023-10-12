import { Component } from '@angular/core';
import { TipoDocumento } from '../models/tipo-documento';
import { TipoDocumentoService } from '../services/tipo-documento.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-tipo-documento',
  templateUrl: './formulario-tipo-documento.component.html',
  styleUrls: ['./formulario-tipo-documento.component.css']
})
export class FormularioTipoDocumentoComponent {
  NewDocumento: TipoDocumento= new TipoDocumento()
  constructor(private documentoService: TipoDocumentoService,
    private router: Router
    ){}

    createNewDocumento(NewDocumento: TipoDocumento){

    console.log("Hola", NewDocumento)
    
    //const idtipodoc=parse(newEntity.tipoDocumento!.idTipoDocumento)
    //const idtipocontri=newEntity.tipoContribuyente!.idTipoContribuyente
    //.tipoDocumento!.idTipoDocumento= parseInt(idtipodoc!)
    //newEntity.tipoContribuyente!.idTipoContribuyente= idtipocontri
    this.documentoService.createTipoDocumento(NewDocumento).subscribe((response) => {
      console.log('Documento created successfully', response);
      // Clear the form or reset fields as needed
      // You can also navigate to a different route after successful creation.
      this.router.navigate(["/tipoDocumento"])
    },
    (error) => {
      console.error('Error creating entity', error);
    })
  }

}
