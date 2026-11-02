import { ChangeDetectorRef, Component } from '@angular/core';
import { Osszetevo } from './osszetevo.model';
import { TitkositoPipe } from '../titkosito-pipe';
import { VaraszeroPipe } from '../varaszero-pipe';
import { SzemmelVeres } from '../szemmel-veres';
import { UstbeDobas } from '../ustbe-dobas';

@Component({
  imports: [TitkositoPipe, VaraszeroPipe, SzemmelVeres, UstbeDobas],
  selector: 'app-boszorkany-konyha',
  styleUrl: './boszorkany-konyha.component.scss',
  templateUrl: './boszorkany-konyha.component.html',
})
export class BoszorkanyKonyhaComponent {

  osszetevok:Osszetevo[] = [];
  interval:any;

  constructor(private ref:ChangeDetectorRef){
    console.log('1. Constructor: Üst előkészítése...');
  }

  ngOnInit(){
    this.osszetevok.push({ id:1, nev:"Békahere", varazsero:50, titkositott:false });
    this.osszetevok.push({ id:2, nev:"Macskafarokvég", varazsero:32, titkositott:false });
    this.osszetevok.push({ id:3, nev:"Patkánykorpa", varazsero:75, titkositott:true });
    this.osszetevok.push({ id:4, nev:"Vajdavér", varazsero:100, titkositott:true });
    this.osszetevok.push({ id:5, nev:"Folyékony kakaskukorékolás", varazsero:49, titkositott:false });

    this.interval = setInterval(() => {
      console.log("Blub-blub... az üst fortyog!");
    }, 1000);
  }

  ngOnDestroy(){
    clearInterval(this.interval);
  }
}
