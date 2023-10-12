import { Component, OnInit } from '@angular/core';
import { TipoContribuyente } from '../models/tipo-contribuyente';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoContribuyenteService } from '../services/tipo-contribuyente-service.service';

@Component({
  selector: 'app-formulario-tipo-contribuyente',
  templateUrl: './formulario-tipo-contribuyente.component.html',
  styleUrls: ['./formulario-tipo-contribuyente.component.css']
})


export class FormularioTipoContribuyenteComponent implements OnInit{
  
  entityId:number|null=null
  tipoContribuyentes: TipoContribuyente[]= []
  NewContribuyente: TipoContribuyente= new TipoContribuyente()
  constructor(private ContribuyenteService: TipoContribuyenteService,
    private router: Router,
    private route:ActivatedRoute,
    private tipoContribuyenteService: TipoContribuyenteService
    ){}

    ngOnInit() {
      const entityIdParam = this.route.snapshot.paramMap.get('id');
      this.entityId = entityIdParam ? parseInt(entityIdParam, 10) : null;
      if (this.entityId) {
        // Load the entity data for editing
        console.log(this.entityId);
        this.tipoContribuyenteService.getTipoContribuyenteById(this.entityId).subscribe((response) => {
          console.log('update created successfully', response);
          // Clear the form or reset fields as needed
          // You can also navigate to a different route after successful creation.
      
          this.NewContribuyente=response

        },
        (error) => {
          console.error('Error creating entity', error);
        })
      }
        this.tipoContribuyenteService.getAllTiposContribuyente().subscribe((response) => {
          console.log('update created successfully', response);
          this.tipoContribuyentes=response
        
        },
          (error) => {
            console.error('Error creating entity', error);
          }) 
    }

  createNewContribuyente(NewContribuyente: TipoContribuyente){

    console.log("Hola", NewContribuyente)
    
    //const idtipodoc=parse(newEntity.tipoDocumento!.idTipoDocumento)
    //const idtipocontri=newEntity.tipoContribuyente!.idTipoContribuyente
    //.tipoDocumento!.idTipoDocumento= parseInt(idtipodoc!)
    //newEntity.tipoContribuyente!.idTipoContribuyente= idtipocontri
    this.ContribuyenteService.createTipoContribuyente(NewContribuyente).subscribe((response) => {
      console.log('Contribuyente created successfully', response);
      // Clear the form or reset fields as needed
      // You can also navigate to a different route after successful creation.
      this.router.navigate(["/tipoContribuyente"])
    },
    (error) => {
      console.error('Error creating entity', error);
    })
  }

}
