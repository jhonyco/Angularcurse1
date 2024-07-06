import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit{
  counter: number = 0;

  @Input() title!: string;
  ngOnInit(): void {
    this.counter = parseInt(localStorage.getItem('counter')!) || 0;
    console.log('Creando Componente');
  }

  setCounter(): void{
    this.counter = this.counter + 1;
    localStorage.setItem('counter', this.counter.toString());
    // this.counter+'' Otra Forma de convertir numero a string rapida
  }
}
