import { Component, OnInit } from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { Titulo } from 'src/app/modelos/titulo';
import { TituloService } from 'src/app/servicios/titulo.service';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {

  public textoBusqueda: string = "";
  public titulos: Titulo[] = [];
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


  public constructor(private tituloService: TituloService,) {

  }

  ngOnInit(): void {
    this.listar();
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

  }

}
