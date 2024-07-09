import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit{
  counter: number = 0;

  @Input() title!: string;

  @Output() counterEmit: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.counter = parseInt(localStorage.getItem('counter')!) || 0;
    console.log('Creando Componente');
  }

  setCounter(): void{
    this.counter = this.counter + 1;
    localStorage.setItem('counter', this.counter.toString());
    this.counterEmit.emit(this.counter);
    // this.counter+'' Otra Forma de convertir numero a string rapida
  }
}
