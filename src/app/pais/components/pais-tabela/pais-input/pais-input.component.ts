import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: [],
})
export class PaisInputComponent {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  termo: string = '';

  buscar() {
    this.onEnter.emit(this.termo);
  }
}
