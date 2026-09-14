import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-termek',
  imports: [],
  templateUrl: './termek.component.html',
  styleUrl: './termek.component.scss',
})
export class TermekComponent {
  db = 0;

  @Input() maxDB = 0;
  @Input() name = "";

  novel(){
    if (this.db < this.maxDB) this.db++;

    if (this.maxDB === this.db) {
      alert(`Kész! Az összes ${this.name} megvéve.`);
    }
  }
}
