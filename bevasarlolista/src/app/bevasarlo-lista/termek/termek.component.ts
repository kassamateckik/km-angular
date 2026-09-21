import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-termek',
  imports: [],
  templateUrl: './termek.component.html',
  styleUrl: './termek.component.scss',
})
export class TermekComponent {
  
  @Input() maxDB = 0;
  @Input() name = "";
  @Input() db = 0;

  @Output() kesz = new EventEmitter<{ nev:string, db:number }>();

  novel(){
    if (this.db < this.maxDB){
      this.db++;
      let info = { nev : this.name, db : this.db };
      this.kesz.emit(info);
    } 

    // if (this.maxDB === this.db) {
    //   this.kesz.emit(this.name);
    //   // alert(`Kész! Az összes ${this.name} megvéve.`);
    // }
  }
}
