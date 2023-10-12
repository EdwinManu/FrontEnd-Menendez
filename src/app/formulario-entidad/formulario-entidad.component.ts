import { Component, OnInit} from '@angular/core';
import { EntidadService } from '../services/entidad.service';
import { Entidad } from '../models/entidad';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoDocumentoService } from '../services/tipo-documento.service';
import { TipoDocumento } from '../models/tipo-documento';
import { TipoContribuyente } from '../models/tipo-contribuyente';
import { TipoContribuyenteService } from '../services/tipo-contribuyente-service.service';

@Component({
  selector: 'app-formulario-entidad',
  templateUrl: './formulario-entidad.component.html',
  styleUrls: ['./formulario-entidad.component.css']
})
export class FormularioEntidadComponent implements OnInit{
  newEntity: Entidad= new Entidad()
  entityId:number|null=null
  tipoDocumentos: TipoDocumento[]= []
  tipoContribuyente: TipoContribuyente[]=[]
  constructor(private entityService: EntidadService,
    private router: Router,
    private route:ActivatedRoute,
    private tipoDocumentoService: TipoDocumentoService,
    private tipoContribuyenteService: TipoContribuyenteService
    ){}

    ngOnInit() {
      const entityIdParam = this.route.snapshot.paramMap.get('id');
      this.entityId = entityIdParam ? parseInt(entityIdParam, 10) : null;
      if (this.entityId) {
        // Load the entity data for editing
        console.log(this.entityId);
        this.entityService.getEntidadById(this.entityId).subscribe((response) => {
          console.log('update created successfully', response);
          // Clear the form or reset fields as needed
          // You can also navigate to a different route after successful creation.
          this.newEntity=response

        },
        (error) => {
          console.error('Error creating entity', error);
        })

      }
        this.tipoDocumentoService.getAllTiposDocumento().subscribe((response) => {
          console.log('update created successfully', response);
          this.tipoDocumentos=response
        
        },
          (error) => {
            console.error('Error creating entity', error);
          }) 

        this.tipoContribuyenteService.getAllTiposContribuyente().subscribe((response) => {
          console.log('update created successfully', response);
          this.tipoContribuyente=response
          
        },
          (error) => {
              console.error('Error creating entity', error);
          }) 
    }

  createNewEntity(newEntity: Entidad){

    console.log("Hola", newEntity)
    
    //const idtipodoc=parse(newEntity.tipoDocumento!.idTipoDocumento)
    //const idtipocontri=newEntity.tipoContribuyente!.idTipoContribuyente
    //.tipoDocumento!.idTipoDocumento= parseInt(idtipodoc!)
    //newEntity.tipoContribuyente!.idTipoContribuyente= idtipocontri
    this.entityService.createEntidad(newEntity).subscribe((response) => {
      console.log('Entity created successfully', response);
      // Clear the form or reset fields as needed
      // You can also navigate to a different route after successful creation.
      this.router.navigate(["/entidades"])
    },
    (error) => {
      console.error('Error creating entity', error);
    })
  }



}
