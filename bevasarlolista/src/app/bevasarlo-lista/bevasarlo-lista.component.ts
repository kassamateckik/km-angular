import { Component, } from '@angular/core';
import { TermekComponent } from './termek/termek.component';

@Component({
  selector: 'app-bevasarlo-lista',
  imports: [TermekComponent],
  templateUrl: './bevasarlo-lista.component.html',
  styleUrl: './bevasarlo-lista.component.scss',
})
export class BevasarloListaComponent {

  tetelek = [
    {
      "nev" : "alma",
      "maxDB" : 5,
      "db" : 0
    },
    {
      "nev" : "kenyér",
      "maxDB" : 2,
      "db" : 0
    },
    {
      "nev" : "pálinka",
      "maxDB" : 10,
      "db" : 0
    }
  ];

  kesz(p:{ nev:string, db:number }){
    for (const tetel of this.tetelek) {
      if (tetel.nev == p.nev) {
        tetel.db = p.db
      }
    }
  }
}
