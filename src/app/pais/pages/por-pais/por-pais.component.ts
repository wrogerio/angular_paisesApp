import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent {
  constructor(private paisService: PaisService) {}

  termo: string = '';
  termoDigitado: string = '';
  ehErro: boolean = false;
  hasValue: boolean = false;
  listaDePaises: Country[] = [];

  buscar(termo: string) {
    this.termo = termo;
    this.termoDigitado = this.termo;
    this.ehErro = false;
    this.hasValue = true;
    this.paisService.buscarPais(this.termo).subscribe(
      (paises) => {
        this.listaDePaises = paises;
      },
      (err) => {
        this.ehErro = true;
        this.listaDePaises = [];
      }
    );
    this.termo = '';
  }
}
