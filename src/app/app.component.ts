import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Hola Mundo BY Jhony';

users: string[] = ['Pepe', 'Maria', 'Juan', 'Andres'];
visible: boolean = false;

setVisible(): void {
  this.visible = true;
}

//users: string[] = [];
//users?: string[];

}
