import { Component, signal } from '@angular/core';
import { OsztalyComponent } from './osztaly/osztaly.component';

@Component({
  selector: 'app-root',
  imports: [OsztalyComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  tanulok = [
    [
      {
        nev: "Minta Aladár",
        jegyek: [4, 2, 3, 1, 4, 5],
        hianyzik: false
      },
      {
        nev: "Nagy Szandra",
        jegyek: [2, 3, 4, 4, 5, 1, 2, 3],
        hianyzik: true
      },
      {
        nev: "Kiss Péter",
        jegyek: [4, 5, 5, 5, 2, 4, 5, 3, 1],
        hianyzik: false
      }
    ],
    [
      {
        nev: "Alapos Domonkos",
        jegyek: [4, 2, 4, 5],
        hianyzik: true
      },
      {
        nev: "Kis Szandra",
        jegyek: [2, 5, 1, 2, 3],
        hianyzik: false
      },
      {
        nev: "Lakatos Leonídász Legolász",
        jegyek: [4, 5, 5, 5, 2, 1],
        hianyzik: false
      }
    ]
  ]
  osszesHianyzok = 0;

  ngOnInit(){
    this.megszamolHianyzok();
  }

  megszamolHianyzok(){
    console.log("alma");
    
    this.osszesHianyzok = 0
    for (const tomb of this.tanulok) {
      for (const t of tomb) {
        if (t.hianyzik) this.osszesHianyzok++;
      }
    }
  }
}
