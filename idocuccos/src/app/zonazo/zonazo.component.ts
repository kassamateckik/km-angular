import { Component } from '@angular/core';
import { ZonaComponent } from './zona/zona.component';

@Component({
  selector: 'app-zonazo',
  imports: [ZonaComponent],
  templateUrl: './zonazo.component.html',
  styleUrl: './zonazo.component.scss',
})
export class ZonazoComponent {

  timezones = [
    {
      name : "Erope/Budapest",
      isLocal : false
    },
    {
      name : "America/New_York",
      isLocal : false
    }
  ]

  demark(tz:string){

  }

}
