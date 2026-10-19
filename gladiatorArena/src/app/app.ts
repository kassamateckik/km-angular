import { Component } from '@angular/core';
import { ArenaComponent } from './arena/arena.component';
import { GladiatorComponent } from './arena/gladiator/gladiator.component';
import { Eredmeny, Gladiator } from './arena/gladiator/gladiator.model';

@Component({
  imports: [ArenaComponent, GladiatorComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  gladiatorok:Gladiator[] = [
    { id : 1, nev : "Spartacus", hp : 100, tamadas : 25, maxHp : 100 },
    { id : 2, nev : "Crixus", hp : 120, tamadas : 20, maxHp : 120 },
    { id : 3, nev : "Gannicus", hp : 90, tamadas : 30, maxHp : 90 },
    { id : 4, nev : "Maximus", hp : 110, tamadas : 15, maxHp : 110 }
  ];

  kivalasztottak:Gladiator[] = [];

  kattintas(event:any):void {
    const { inArena, gladiator } = event;
    if (inArena && gladiator.hp < 100) gladiator.hp++;
    else if (this.kivalasztottak.length < 2) this.kivalasztottak.push(gladiator);
  }

  kihirdet(eredmeny:Eredmeny){
    const { gyoztes, vesztes, tulel } = eredmeny;
    const gyId:number = this.gladiatorok.findIndex(g => g.id === gyoztes!.id)!;
    const vId:number = this.gladiatorok.findIndex(g => g.id === vesztes!.id)!;

    gyoztes!.maxHp += 10;
    gyoztes!.hp = gyoztes!.maxHp;

    this.gladiatorok[gyId] = gyoztes!;

    if (tulel) {
      vesztes!.hp = vesztes!.maxHp;
      this.gladiatorok[vId] = vesztes!;
    } 
    else this.gladiatorok.splice(this.gladiatorok.findIndex(g => g.id === vesztes!.id), 1);

    this.kivalasztottak = [];
  }
}
