import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { GladiatorComponent } from './gladiator/gladiator.component';

@Component({
  imports: [GladiatorComponent],
  selector: 'app-arena',
  styleUrl: './arena.component.scss',
  templateUrl: './arena.component.html',
})
export class ArenaComponent {
  @Input() harcos1:any;
  @Input() harcos2:any;

  @Output() dontes:any = new EventEmitter<any>(); 

  interval:any; 
  gyoztes:any;
  vesztes:any;

  harc(h1:any, h2:any):void {
    h1.hp -= this.random(0, h2.tamadas);
    h2.hp -= this.random(0, h1.tamadas);
    this.ref.markForCheck();

    if (h1.hp <= 0 || h2.hp <= 0) this.jatekVege();
  }
  
  jatekVege():void {
    clearInterval(this.interval);
    if (this.harcos1.hp <= 0) {
      this.vesztes = this.harcos1;
      this.gyoztes = this.harcos2;
    } 
    else {
      this.vesztes = this.harcos2;
      this.gyoztes = this.harcos1;
    }
    console.log(`Győztes: ${this.gyoztes}; Vesztes: ${this.vesztes}`);
  }

  random(min:number, max:number):number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngOnInit():void {
    this.interval = setInterval(() => {
      this.harc(this.harcos1, this.harcos2);
    }, 1000);
    console.log("kezdet:");
    console.log(this.harcos1);
  }

  constructor(private ref:ChangeDetectorRef) {}
}
