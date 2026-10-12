import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-tanulo',
  styleUrl: './tanulo.component.scss',
  templateUrl: './tanulo.component.html',
})
export class TanuloComponent {
  @Input() tanulo!: {
    nev : string,
    jegyek : number[],
    hianyzik : boolean 
  };

  @Output() jegyBeirva = new EventEmitter<number>();
  @Output() hianyzasValtozott = new EventEmitter<void>();

  ujJegy:number|null = null;

  atlag():number {
    if (!this.tanulo.jegyek || this.tanulo.jegyek.length === 0){
      return 0;
    }
    return this.tanulo.jegyek.reduce((a, b) => a+b, 0)/this.tanulo.jegyek.length;
  }

  jegyMentese():void {
    if (this.ujJegy && this.ujJegy > 0 && this.ujJegy < 6) {
      this.jegyBeirva.emit(this.ujJegy);
    }
  }

  hianyzasValtozasa():void {
    this.hianyzasValtozott.emit();
  }
}
