import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { Globales } from 'src/app/modelos/globales';
import { Titulo } from 'src/app/modelos/titulo';
import { TituloService } from 'src/app/servicios/titulo.service';
import { TituloEditarComponent } from '../titulo-editar/titulo-editar.component';
import { Empresa } from 'src/app/modelos/empresa';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {

  public textoBusqueda: string = "";
  public titulos: Titulo[] = [];
  public empresas: Empresa[] = [];
  public tituloSeleccion: Titulo | undefined;

  public columnas = [
    { name: 'Nombre', prop: 'nombre' },
    { name: 'Año Pub.', prop: 'año' },
    { name: 'Protagonistas', prop: 'protagonistas' },
    { name: 'Productor', prop: 'productor' },
    { name: 'Director', prop: 'director' },
    { name: 'Empresa', prop: 'empresa.nombre' },
    { name: 'Precio', prop: 'precio' },
  ];
  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;


  public constructor(private tituloService: TituloService,
    private router: Router,
    public dialog: MatDialog,) {

  }

  ngOnInit(): void {
    if (Globales.usuario != null) {
      this.listar();
    }
    else {
      this.router.navigate(["inicio"]);
    }
  }

  public onActivate(event: any) {
    if (event.type == 'click') {
      this.tituloSeleccion = event.row;
    }
  }

  public listar() {
    this.tituloService.listar()
      .subscribe(data => {
        this.titulos = data;
      },
        err => {
          window.alert(err.message)
        });
  }

  public buscar() {
    if (this.textoBusqueda.length > 0) {
      this.tituloService.buscar(this.textoBusqueda)
        .subscribe(data => {
          this.titulos = data;
        },
          err => {
            window.alert(err.message)
          });
    }
    else{
      this.listar();
    }
  }

  public agregar(){

  }

  public modificar(){
    if (this.tituloSeleccion != null && this.tituloSeleccion.id >= 0) {
      const dialogRef = this.dialog.open(TituloEditarComponent, {
        width: '600px',
        height: '500px',
        data: {
          encabezado: `Editando a datos del título [${this.tituloSeleccion.nombre}]`,
          titulo: this.tituloSeleccion,
          empresas: this.empresas,
        }
      });
      
    }
    else{
      window.alert("Debe seleccionar un Título");
    }
  }

  public verificarEliminar(){

  }

  private eliminar(){

  }

}
