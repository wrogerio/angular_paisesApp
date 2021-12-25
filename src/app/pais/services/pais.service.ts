import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiURL: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) {}

  buscarPais(termo: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/name/${termo}`);
  }

  buscarPorCapital(codigo: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/capital/${codigo}`);
  }

  buscarPorCodigo(codigo: string): Observable<Country> {
    return this.http.get<Country>(`${this.apiURL}/alpha/${codigo}`);
  }
}
