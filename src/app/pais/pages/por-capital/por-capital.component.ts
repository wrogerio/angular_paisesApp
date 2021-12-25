import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css'],
})
export class PorCapitalComponent implements OnInit {
  termo: string = '';
  termoDigitado: string = '';
  ehErro: boolean = false;
  hasValue: boolean = false;
  listaDePaises: Country[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termo: string) {
    this.termo = termo;
    this.termoDigitado = this.termo;
    this.ehErro = false;
    this.hasValue = true;
    this.paisService.buscarPorCapital(this.termo).subscribe(
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

  sugerencias(valor: string) {
    //todo: criar sugerencia
  }
}
