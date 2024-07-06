import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Hola Mundo BY Jhony';

subTitle = 'Contador con estado de session';
users: string[] = ['Pepe', 'Maria', 'Juan', 'Andres'];
visible: boolean = false;

setVisible(): void {
  this.visible = this.visible?false : true;
  console.log(' Hemos hecho clic en setVisible');
}

//users: string[] = [];
//users?: string[];
}
