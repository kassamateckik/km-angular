import { ChangeDetectorRef, Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { GladiatorComponent } from './gladiator/gladiator.component';
import { Gladiator, Eredmeny } from './gladiator/gladiator.model';

@Component({
  imports: [GladiatorComponent],
  selector: 'app-arena',
  styleUrl: './arena.component.scss',
  templateUrl: './arena.component.html',
})
export class ArenaComponent {
  // @Input() harcos1:Gladiator = { id:0, nev : "", hp : 0, tamadas : 0};
  // @Input() harcos2:Gladiator = { id:0, nev : "", hp : 0, tamadas : 0};
  
  @Input() h:Gladiator[] = [];

  @Output() eredmeny:EventEmitter<Eredmeny> = new EventEmitter<Eredmeny>();
  
  interval:any; 
  gyoztes:Gladiator|undefined;
  vesztes:Gladiator|undefined;

  constructor(private ref:ChangeDetectorRef) {}
  
  gyogyit(gladiator:Gladiator):void {
    if (gladiator.hp < 100) gladiator.hp++;
  }

  harc():void {
    let elso:number, masodik:number;
    if (this.random(0, 99) < 50) {
      elso = 0;
      masodik = 1;
    } else {
      elso = 1;
      masodik = 0;
    }

    let masokikSebzes:number = this.h[masodik].hp - this.random(0, this.h[elso].tamadas);
    let masodikUjHp:number = masokikSebzes < 0 ? 0 : masokikSebzes;
    this.h[masodik] = { ...this.h[masodik], hp : masodikUjHp };
    
    if (this.h[masodik].hp > 0){
      let elsoSebzes:number = this.h[elso].hp - this.random(0, this.h[masodik].tamadas);
      let elsoUjHp:number = elsoSebzes < 0 ? 0 : elsoSebzes;
      this.h[elso] = { ...this.h[elso], hp : elsoUjHp }
    }

    this.ref.detectChanges();

    if (this.h[0].hp <= 0 || this.h[1].hp <= 0) this.jatekVege();
  }
  
  jatekVege():void {
    clearInterval(this.interval);
    if (this.h[0].hp <= 0) {
      this.vesztes = this.h[0];
      this.gyoztes = this.h[1];
    } 
    else {
      this.vesztes = this.h[1];
      this.gyoztes = this.h[0];
    }
    console.log(`Győztes: ${this.gyoztes.nev}; Vesztes: ${this.vesztes.nev}`);
  }
  
  random(min:number, max:number):number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  dontes(tulel:boolean):void{
    let vissza:Eredmeny = {gyoztes : this.gyoztes, vesztes : this.vesztes, tulel};
    this.eredmeny.emit(vissza);
  }

  ngOnChanges(changes:SimpleChanges):void {
    console.log(changes);
  }
  
  ngOnInit():void {
    this.interval = setInterval(() => {
      this.harc();
    }, 1000);
  }

  ngOnDesroy():void {
    clearInterval(this.interval);
  }
}
