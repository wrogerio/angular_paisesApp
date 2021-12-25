import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: [],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;
  linguas: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((param) => this.paisService.buscarPorCodigo(param['paisId'])),
        tap((pais) => (this.pais = pais))
      )
      .subscribe((pais) => {
        this.pais = pais;
        this.linguas = pais.languages.map((lingua) => lingua.name).join(', ');
        console.log(pais);
      });
  }
}
