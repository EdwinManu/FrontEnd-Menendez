import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OpcionesNavegacionComponent } from './opciones-navegacion/opciones-navegacion.component';
import { EntidadComponent } from './components/entidad/entidad.component';
import { TipoDocumentoComponent } from './components/tipo-documento/tipo-documento.component';
import { TipoContribuyenteComponent } from './components/tipo-contribuyente/tipo-contribuyente.component';
import { FormularioEntidadComponent } from './formulario-entidad/formulario-entidad.component';
import { FormularioTipoContribuyenteComponent } from './formulario-tipo-contribuyente/formulario-tipo-contribuyente.component';
import { FormularioTipoDocumentoComponent } from './formulario-tipo-documento/formulario-tipo-documento.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'opciones', component: OpcionesNavegacionComponent },
    { path: 'entidades', component: EntidadComponent },
    { path: 'tipoDocumento', component: TipoDocumentoComponent },
    { path: 'tipoContribuyente', component: TipoContribuyenteComponent },
    { path: 'agregarEntidad/:id', component:  FormularioEntidadComponent},
    { path: 'agregarContribuyente', component:  FormularioTipoContribuyenteComponent},
    { path: 'agregarDocumento', component:  FormularioTipoDocumentoComponent},

  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }