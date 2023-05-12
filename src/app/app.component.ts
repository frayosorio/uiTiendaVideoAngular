import { Component } from '@angular/core';
import { Usuario } from './modelos/usuario';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './componentes/login/login.component';
import { UsuarioService } from './servicios/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TiendaVideo';

  public usuarioActual: Usuario | null = null;

  constructor(public dialog: MatDialog,
    private usuarioService: UsuarioService,
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
      });
    }
    );
  }

  cerrar() {

  }

}
