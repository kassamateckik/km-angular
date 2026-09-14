import { Component, signal } from '@angular/core';
import { BevasarloListaComponent } from './bevasarlo-lista/bevasarlo-lista.component';

@Component({
  selector: 'app-root',
  imports: [BevasarloListaComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
