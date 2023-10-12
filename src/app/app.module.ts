import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TipoDocumentoComponent } from './components/tipo-documento/tipo-documento.component';
import { TipoContribuyenteComponent } from './components/tipo-contribuyente/tipo-contribuyente.component';
import { EntidadComponent } from './components/entidad/entidad.component';
import { HttpClientModule } from '@angular/common/http';
import { OpcionesNavegacionComponent } from './opciones-navegacion/opciones-navegacion.component';
import { FormularioEntidadComponent } from './formulario-entidad/formulario-entidad.component';
import { LoginComponent } from './login/login.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { FormularioTipoDocumentoComponent } from './formulario-tipo-documento/formulario-tipo-documento.component';
import { FormularioTipoContribuyenteComponent } from './formulario-tipo-contribuyente/formulario-tipo-contribuyente.component';


@NgModule({
  declarations: [
    AppComponent,
    TipoDocumentoComponent,
    TipoContribuyenteComponent,
    EntidadComponent,
    OpcionesNavegacionComponent,
    FormularioEntidadComponent,
    LoginComponent,
    SingUpComponent,
    FormularioTipoDocumentoComponent,
    FormularioTipoContribuyenteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
