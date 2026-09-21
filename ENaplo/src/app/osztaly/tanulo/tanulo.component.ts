import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tanulo',
  imports: [FormsModule],
  templateUrl: './tanulo.component.html',
  styleUrl: './tanulo.component.scss',
})
export class TanuloComponent {
  @Input() nev:string = "";
  @Input() jegyek:number[] = [];
  @Input() hianyzik:boolean = false;

  @Output() jegyBeirva = new EventEmitter<number>();
  @Output() hianyzasValtozott = new EventEmitter();

  ujJegy:number = 0;
  atlag:number = this.kellAtlag();

  hozzaad(){
    this.jegyek.push(this.ujJegy);
    this.atlag = this.kellAtlag();
    this.jegyBeirva.emit(this.ujJegy);
  }

  modosit(){
    this.hianyzik = !this.hianyzik;
    this.hianyzasValtozott.emit();
  }

  kellAtlag():number{
    let sum = 0;
    for (const n of this.jegyek) {
      sum += n;
    }
    return sum/this.jegyek.length;
  }
}
