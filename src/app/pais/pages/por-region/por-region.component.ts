import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { Regiao } from '../../interfaces/regiao.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent implements OnInit {
  regioes: Regiao[] = [
    { codigo: 'EU', nome: 'European Union' },
    { codigo: 'EFTA', nome: 'European Free Trade Association' },
    { codigo: 'CARICOM', nome: 'Caribbean Community' },
    { codigo: 'PA', nome: 'Pacific Alliance' },
    { codigo: 'AU', nome: 'African Union' },
    { codigo: 'USAN', nome: 'Union of South American Nations' },
    { codigo: 'EEU', nome: 'Eurasian Economic Union' },
    { codigo: 'AL', nome: 'Arab League' },
    { codigo: 'ASEAN', nome: 'Association of Southeast Asian Nations' },
    { codigo: 'CAIS', nome: 'Central American Integration System' },
    { codigo: 'CEFTA', nome: 'Central European Free Trade Agreement' },
    { codigo: 'NAFTA', nome: 'North American Free Trade Agreement' },
    {
      codigo: 'SAARC',
      nome: 'South Asian Association for Regional Cooperation',
    },
  ];
  regiaoAtiva: string = '';
  paises: Country[] = [];
  regioes01: Regiao[] = [];
  regioes02: Regiao[] = [];

  constructor(private paisService: PaisService) {
    const mid = Math.floor(this.regioes.length / 2);
    this.regioes01 = this.regioes.slice(0, mid + 1);
    this.regioes02 = this.regioes.slice(mid + 1);
  }

  ngOnInit(): void {}

  getClasseCSS(regiao: string) {
    return regiao === this.regiaoAtiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  getClasseCSSList(regiao: string) {
    return regiao === this.regiaoAtiva
      ? 'bg-primary text-light'
      : 'list-group-item cursor';
  }

  ativarRegiao(regiao: string) {
    this.regiaoAtiva = regiao;
    this.paisService.buscarPorRegiao(regiao).subscribe((paises) => {
      this.paises = paises;
    });
  }
}
