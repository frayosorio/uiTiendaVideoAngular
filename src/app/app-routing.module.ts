import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EmpresaComponent } from './componentes/empresa/empresa.component';
import { TituloComponent } from './componentes/titulo/titulo.component';

const routes: Routes = [
  { path: "inicio", component: InicioComponent },
  { path: "empresa", component: EmpresaComponent },
  { path: "titulo", component: TituloComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
