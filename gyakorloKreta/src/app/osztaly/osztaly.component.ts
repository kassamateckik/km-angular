import { Component, Input } from '@angular/core';
import { TanuloComponent } from './tanulo/tanulo.component';

@Component({
  imports: [TanuloComponent],
  selector: 'app-osztaly',
  styleUrl: './osztaly.component.scss',
  templateUrl: './osztaly.component.html',
})
export class OsztalyComponent {
  @Input() osztaly! : {
    nev:string,
    ofi:string,
    tanulok: {
      nev : string,
      jegyek : number[],
      hianyzik : boolean 
    }[]
  };

  jegyBeirva(tanulo:{
    nev : string,
    jegyek : number[],
    hianyzik : boolean 
  }, jegy:number){
    tanulo.jegyek.push(jegy);
  }

  hianyzasValtozott(tanulo:{
    nev : string,
    jegyek : number[],
    hianyzik : boolean 
  }){
    tanulo.hianyzik = !tanulo.hianyzik;
  }

  // tanulo = {
  //   nev : "Kiss Pista",
  //   jegyek : [1, 1, 2, 3, 4],
  //   hianyzik : true
  // }
}
