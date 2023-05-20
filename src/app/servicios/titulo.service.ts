import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Globales } from '../modelos/globales';

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

}
