import { Component, OnInit } from '@angular/core';
import { ArenaComponent } from './arena/arena.component';
import { GladiatorComponent } from './arena/gladiator/gladiator.component';
import { Eredmeny, Gladiator } from './arena/gladiator/gladiator.model';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [ArenaComponent, GladiatorComponent, FormsModule],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App implements OnInit {
  gladiatorok:Gladiator[] = [
    { id : 1, nev : "Spartacus", hp : 0, tamadas : 25, maxHp : 100, gyozelmek : 0 },
    { id : 2, nev : "Crixus", hp : 120, tamadas : 20, maxHp : 120, gyozelmek : 0 },
    { id : 3, nev : "Gannicus", hp : 90, tamadas : 30, maxHp : 90, gyozelmek : 0 },
    { id : 4, nev : "Maximus", hp : 110, tamadas : 15, maxHp : 110, gyozelmek : 0 }
  ];

  legtobbGyozelem = -1;

  kivalasztottak:Gladiator[] = [];

  ujId = 0;
  ujNev = "";
  ujMaxHp = 0;
  ujTamadas = 0;

  kattintas(gladiator:Gladiator):void {
    if (this.kivalasztottak.length < 2 && !this.kivalasztottak.some(g => g.id === gladiator.id)) {
      this.kivalasztottak.push(gladiator);
    }
  }

  kihirdet(eredmeny:Eredmeny){
    const { gyoztes, vesztes, tulel } = eredmeny;
    const gyId:number = this.gladiatorok.findIndex(g => g.id === gyoztes!.id)!;
    const vId:number = this.gladiatorok.findIndex(g => g.id === vesztes!.id)!;

    gyoztes!.maxHp += 10;
    gyoztes!.gyozelmek++;

    this.gladiatorok[gyId] = gyoztes!;

    if (tulel) this.gladiatorok[vId] = vesztes!;
    else this.gladiatorok.splice(this.gladiatorok.findIndex(g => g.id === vesztes!.id), 1);

    this.absolutGyoztesKeres();
    
    this.kivalasztottak = [];
  }

  ujGladiator():void {
    this.gladiatorok.push({ id : this.ujId, nev : this.ujNev, maxHp: this.ujMaxHp, tamadas : this.ujTamadas, hp : this.ujMaxHp, gyozelmek : 0 });
  }

  absolutGyoztesKeres():void {
    const gyozelmek:number[] = this.gladiatorok.map(g => g.gyozelmek);
    const legtobb:number = Math.max(...gyozelmek);
    this.legtobbGyozelem = legtobb === 0 ? -1 : legtobb;

    console.log(this.legtobbGyozelem);
  }

  ngOnInit():void {
    this.absolutGyoztesKeres();
  }
}
