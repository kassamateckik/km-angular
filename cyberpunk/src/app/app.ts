import { ChangeDetectorRef, Component } from '@angular/core';
import { HackerTerminalComponent } from './hacker-terminal/hacker-terminal.component';
import { AdatCsomag } from './hacker-terminal/hacker-terminal.model';

@Component({
  imports: [HackerTerminalComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  constructor(private ref:ChangeDetectorRef) {
    console.log("1. Constructor: Terminál inicializálása...");
  }

  adatcsomagok:AdatCsomag[] = [];
  interval:NodeJS.Timeout|undefined;
  karantenban:number = 0;

  ngOnInit() {
    this.adatcsomagok = [
      { id: 1, fajlnev: 'rendszermag_kulcs_01', kockazat: 88, vedett: true },
      { id: 2, fajlnev: 'felhasznaloi_naplo', kockazat: 20, vedett: false },
      { id: 3, fajlnev: 'tuzfal_konfig_2026', kockazat: 54, vedett: true },
      { id: 4, fajlnev: 'trojai_betolto', kockazat: 95, vedett: false },
      { id: 5, fajlnev: 'titkos_tervrajz_9', kockazat: 67, vedett: true },
      { id: 6, fajlnev: 'halozati_ping', kockazat: 12, vedett: false }
    ];

    this.interval = setInterval(() => {
      console.log("Szkennelés folyamatban... Rendszer stabil.");
    }, 2000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  plusz(){
    this.karantenban++;
    console.log(`Fájl karanténba helyezve! Összesen zárolva: ${this.karantenban} db`);
  }
}
