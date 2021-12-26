import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: [],
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();
  termo: string = '';

  ngOnInit() {
    this.debouncer.pipe(debounceTime(300)).subscribe((v) => {
      this.onDebounce.emit(v);
    });
  }

  buscar() {
    this.onEnter.emit(this.termo);
  }

  teclaPressionada() {
    this.debouncer.next(this.termo);
  }
}
