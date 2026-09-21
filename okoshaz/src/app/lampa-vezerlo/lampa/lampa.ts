import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lampa',
  imports: [FormsModule],
  templateUrl: './lampa.html',
  styleUrl: './lampa.scss',
})
export class Lampa {
  @Input() nev = "";
  @Input() fenyero = 0;
  @Input() allapot = false;

  @Output() kapcsolas = new EventEmitter<string>();

  kapcsol() {
    this.allapot = !this.allapot;
    this.kapcsolas.emit(this.nev);
  }
}
