import { Component, signal } from '@angular/core';
import { OsztalyComponent } from './osztaly/osztaly.component';

@Component({
  imports: [OsztalyComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  osztalyok:{
    nev:string,
    ofi:string,
    tanulok: {
      nev : string,
      jegyek : number[],
      hianyzik : boolean 
    }[]
  }[] = [
    {
      nev : "13.C",
      ofi : "Tótin Lóránt",
      tanulok: [
        {
          nev : "Bencék",
          jegyek : [1, 5, 4, 2],
          hianyzik : true
        },
        {
          nev : "Máté",
          jegyek : [5, 5, 5, 5, 5, 4],
          hianyzik : false
        },
        {
          nev : "Kata",
          jegyek : [5, 5, 5],
          hianyzik : false
        }
      ]
    },
    {
      nev : "13.B",
      ofi : "Roják Vince",
      tanulok: [
        {
          nev : "Máté",
          jegyek : [5, 5, 5, 5, 5, 4],
          hianyzik : false
        },
        {
          nev : "Gergely",
          jegyek : [2, 1, 1, 2, 1],
          hianyzik : true
        }
      ]
    }
  ]
}
