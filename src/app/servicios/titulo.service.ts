import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Globales } from '../modelos/globales';
import { Titulo } from '../modelos/titulo';

@Injectable({
  providedIn: 'root'
})
export class TituloService {

  url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = `${environment.urlBase}titulos`;
  }

  public obtenerHeader() {
    const headers = new HttpHeaders({
      'Authorization': Globales.usuario!.token,
    });
    return { headers: headers };
  }

  public listar(): Observable<any> {
    let urlT = `${this.url}/listar`;
    return this.http.get<any[]>(urlT, this.obtenerHeader());
  }

  public buscar(nombre: string): Observable<any> {
    let urlT = `${this.url}/buscar/${nombre}`;
    return this.http.get<any[]>(urlT, this.obtenerHeader());
  }

  public agregar(titulo: Titulo): Observable<any> {
    let urlT = this.url + "/agregar";
    return this.http.post<any>(urlT, titulo, this.obtenerHeader());
  }

  public actualizar(titulo: Titulo): Observable<any> {
    let urlT = this.url + "/modificar";
    return this.http.put<any>(urlT, titulo, this.obtenerHeader());
  }

}
