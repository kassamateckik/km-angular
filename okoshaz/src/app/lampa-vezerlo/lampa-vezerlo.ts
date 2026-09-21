import { Component } from '@angular/core';
import { Lampa } from './lampa/lampa';

@Component({
  selector: 'app-lampa-vezerlo',
  imports: [Lampa],
  templateUrl: './lampa-vezerlo.html',
  styleUrl: './lampa-vezerlo.scss',
})
export class LampaVezerlo {
  szobak = [
    {
      nev : "nappali",
      allapot : false
    },
    {
      nev : "garázs",
      allapot : false
    },
    {
      nev : "spelyz",
      allapot : false
    },
    {
      nev : "hálószoba",
      allapot : false
    }
  ];

  sum = 0;

  tortenes(nev:string){
    for (const szoba of this.szobak) {
      if (szoba.nev == nev) {
        szoba.allapot = !szoba.allapot;
      }
    }
    console.log("alam");
    
    this.sum = 0;
    for (const szoba of this.szobak) {
      if (szoba.allapot) this.sum += 1;
    }
  }
}
