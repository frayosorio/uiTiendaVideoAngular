import { Component } from '@angular/core';
import { Usuario } from './modelos/usuario';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './componentes/login/login.component';
import { UsuarioService } from './servicios/usuario.service';
import { Router } from '@angular/router';
import { Globales } from './modelos/globales';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TiendaVideo';

  public usuarioActual: Usuario | null = null;

  public opciones = [
    { titulo: "Países", url: "pais", icono: "assets/iconos/Pais.png" },
    { titulo: "Empresas", url: "empresa", icono: "assets/iconos/Empresa.png" },
    { titulo: "Títulos", url: "titulo", icono: "assets/iconos/Titulo.png" },
  ];

  constructor(public dialog: MatDialog,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
  }

  login() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: "400px",
      height: "400px",
      data: { usuario: "", clave: "" }
    });

    dialogRef.afterClosed().subscribe(data => {
      this.usuarioService.login(data.usuario, data.clave).subscribe(response => {
        this.usuarioActual = new Usuario(response.usuario, response.token);
        Globales.usuario = this.usuarioActual;
      });
    }
    );
  }

  cerrar() {
    this.usuarioActual = null;
    Globales.usuario = null;
    this.router.navigate(["inicio"]);
  }

}
