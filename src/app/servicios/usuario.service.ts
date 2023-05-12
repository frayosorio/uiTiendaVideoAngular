import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = `${environment.urlBase}usuarios`;
  }

  public login(usuario: String, clave: string): Observable<any> {
    let urlT =`${this.url}/login?usuario=${usuario}&clave=${clave}`;
    return this.http.get(urlT);
  }

}
