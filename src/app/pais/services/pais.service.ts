import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiURL: string = 'https://restcountries.com/v2';

  parans = new HttpParams().set(
    'fields',
    'name,population,alpha2Code,flag,capital'
  );

  constructor(private http: HttpClient) {}

  buscarPais(termo: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/name/${termo}`, {
      params: this.parans,
    });
  }

  buscarPorCapital(codigo: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/capital/${codigo}`, {
      params: this.parans,
    });
  }

  buscarPorCodigo(codigo: string): Observable<Country> {
    return this.http.get<Country>(`${this.apiURL}/alpha/${codigo}`);
  }

  buscarPorRegiao(codigo: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/regionalbloc/${codigo}`, {
      params: this.parans,
    });
  }
}
