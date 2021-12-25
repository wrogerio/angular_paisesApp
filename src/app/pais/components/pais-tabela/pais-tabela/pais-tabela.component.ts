import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/pais/interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabela',
  templateUrl: './pais-tabela.component.html',
  styleUrls: [],
})
export class PaisTabelaComponent implements OnInit {
  @Input() listaDePaises: Country[] = [];

  constructor() {}

  ngOnInit(): void {}
}
