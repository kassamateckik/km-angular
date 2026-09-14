import { Component, } from '@angular/core';
import { TermekComponent } from './termek/termek.component';

@Component({
  selector: 'app-bevasarlo-lista',
  imports: [TermekComponent],
  templateUrl: './bevasarlo-lista.component.html',
  styleUrl: './bevasarlo-lista.component.scss',
})
export class BevasarloListaComponent {}
