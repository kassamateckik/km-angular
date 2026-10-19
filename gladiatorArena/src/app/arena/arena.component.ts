import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { GladiatorComponent } from './gladiator/gladiator.component';
import { Gladiator } from './gladiator/gladiator.model';

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
  
  interval:any; 
  gyoztes:Gladiator|undefined;
  vesztes:Gladiator|undefined;

  constructor(private ref:ChangeDetectorRef) {}
  
  harc():void {
    let elso:number, masodik:number;
    if (this.random(0, 99) < 50) {
      elso = 0;
      masodik = 1;
    } else {
      elso = 1;
      masodik = 0;
    }

    this.h[masodik] = { ...this.h[masodik], hp : this.h[masodik].hp - this.random(0, this.h[elso].tamadas)}
    
    if (this.h[masodik].hp > 0){
      this.h[elso] = { ...this.h[elso], hp : this.h[elso].hp - this.random(0, this.h[masodik].tamadas)}
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
  
  ngOnInit():void {
    this.interval = setInterval(() => {
      this.harc();
    }, 1000);
  }
}
