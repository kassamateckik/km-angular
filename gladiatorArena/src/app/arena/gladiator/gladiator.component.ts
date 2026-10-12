import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';

@Component({
  imports: [NgClass],
  selector: 'app-gladiator',
  styleUrl: './gladiator.component.scss',
  templateUrl: './gladiator.component.html',
})
export class GladiatorComponent {
  @Input() gladiator:{ id:number, nev:string, hp:number, tamadas:number } = { id:0, nev : "", hp : 0, tamadas : 0};
  @Input() inArena:boolean = false;

  @Output() katt:EventEmitter<{ inArena:boolean, gladiator:any }> = new EventEmitter<{ inArena:boolean, gladiator:any }>();
  @Output() tulel:EventEmitter<boolean> = new EventEmitter<boolean>();

  allapot():string {
    if (this.inArena) return "arena";
    else if (this.gladiator.hp == 0) return "haldoklik";
    return "";
  }

  kattintas():void {
    this.katt.emit({ inArena : this.inArena, gladiator : this.gladiator });
  }

  dont(dontes:boolean):void {
    this.tulel.emit(dontes);
  }

  constructor() {
    console.log("Kártya példányosítva!");
  }

  ngOnInit():void {
    console.log(`${this.gladiator.nev} kártyája inicializálva!`);
  }

  ngOnChanges(changes:SimpleChange):void{
    console.log(changes);
  }

  ngOnDestroy():void{
    console.log(`${this.gladiator.nev} kártyája VÉGLEG törlődött a memóriából!`);
  }
}
