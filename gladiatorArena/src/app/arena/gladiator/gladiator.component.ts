import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output, ChangeDetectorRef, OnInit, OnChanges, OnDestroy, inject } from '@angular/core';
import { Gladiator } from './gladiator.model';

@Component({
  imports: [NgClass],
  selector: 'app-gladiator',
  styleUrl: './gladiator.component.scss',
  templateUrl: './gladiator.component.html',
})
export class GladiatorComponent implements OnInit, OnChanges, OnDestroy {
  @Input() gladiator:Gladiator = { id:0, nev : "", hp : 0, tamadas : 0, maxHp : 0, gyozelmek : 0 };
  @Input() inArena = false;
  @Input() szines = false;

  @Output() katt:EventEmitter<Gladiator> = new EventEmitter<Gladiator>();
  @Output() tulel:EventEmitter<boolean> = new EventEmitter<boolean>();

  interval:NodeJS.Timeout|undefined;

  allapot():string {
    if (this.inArena) return "arena";
    else if (this.gladiator.hp == 0) return "haldoklik";
    return "";
  }

  kattintas():void {
    this.katt.emit(this.gladiator);
    if (!this.inArena) clearInterval(this.interval);
  }

  dont(dontes:boolean):void {
    this.tulel.emit(dontes);
  }

  private readonly ref = inject(ChangeDetectorRef);

  constructor() {
    console.log("Kártya példányosítva!");
  }

  ngOnInit():void {
    console.log(`${this.gladiator.nev} kártyája inicializálva!`);
    this.inArena = false;
  }

  ngOnChanges():void{
    this.interval = setInterval(() => {
      let hp:number = this.gladiator.hp;
  
      if (hp < this.gladiator.maxHp && !this.inArena) hp++;
      else clearInterval(this.interval);
  
      this.gladiator = { ...this.gladiator, hp };
  
      this.ref.detectChanges();
    }, 1000);
  }

  ngOnDestroy():void{
    console.log(`${this.gladiator.nev} kártyája VÉGLEG törlődött a memóriából!`);
    clearInterval(this.interval);
  }
}
