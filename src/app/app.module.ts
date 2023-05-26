import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReferenciasMaterialModule } from './referencias-material.module';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmpresaComponent } from './componentes/empresa/empresa.component';
import { TituloComponent } from './componentes/titulo/titulo.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TituloEditarComponent } from './componentes/titulo-editar/titulo-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmpresaComponent,
    TituloComponent,
    TituloEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReferenciasMaterialModule,
    FormsModule,
    HttpClientModule,
    NgxDatatableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
