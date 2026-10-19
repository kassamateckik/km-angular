import { Component } from '@angular/core';
import { ArenaComponent } from './arena/arena.component';
import { GladiatorComponent } from './arena/gladiator/gladiator.component';
import { Gladiator } from './arena/gladiator/gladiator.model';

@Component({
  imports: [ArenaComponent, GladiatorComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  gladiatorok:Gladiator[] = [
    { id : 1, nev : "Spartacus", hp : 100, tamadas : 25 },
    { id : 2, nev : "Crixus", hp : 120, tamadas : 20 },
    { id : 3, nev : "Gannicus", hp : 90, tamadas : 30 },
    { id : 4, nev : "Maximus", hp : 110, tamadas : 15 }
  ];

  kivalasztottak:Gladiator[] = [];

  kattintas(event:any):void {
    const { inArena, gladiator } = event;
    if (inArena && gladiator.hp < 100) gladiator.hp++;
    else if (this.kivalasztottak.length < 2) this.kivalasztottak.push(gladiator);
  }
}
