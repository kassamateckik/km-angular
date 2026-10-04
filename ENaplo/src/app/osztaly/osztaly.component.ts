import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TanuloComponent } from './tanulo/tanulo.component';

@Component({
  selector: 'app-osztaly',
  imports: [TanuloComponent],
  templateUrl: './osztaly.component.html',
  styleUrl: './osztaly.component.scss',
})
export class OsztalyComponent {
  @Input() nev:string = "";
  @Input() osztalyfonok:string = "";
  @Input() tanulok:any[] = [];

  @Output() hianyzas = new EventEmitter();

  osztalyAtlag:number = 0; 

  ngOnInit(){
    this.osztalyAtlag = this.atlagSzamitas();
  }

  atlagSzamitas():number{
    let atlag = 0;
    for (const t of this.tanulok) {
      if (t.jegyek && t.jegyek.length > 0) {
        const tanuloAtlag = t.jegyek.reduce((sum: number, j: number) => sum + j, 0)
                            / t.jegyek.length;
        atlag += tanuloAtlag;
    }
  }
    return atlag / this.tanulok.length;
  }

  jegyBeiras(argumentum:any){
    const {tanuloNev, tanuloJegy} = argumentum;
    const tanulo = this.tanulok.find(t => t.nev === tanuloNev);
    tanulo.jegyek.push(tanuloJegy);

    this.osztalyAtlag = this.atlagSzamitas();
  }

  hianyzasValtozott(nev:string){
    const tanulo = this.tanulok.find(t => t.nev === nev);
    tanulo.hianyzik = !tanulo.hianyzik;
    this.hianyzas.emit();
  }
}
