import { Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-alma',
  imports: [FormsModule],
  templateUrl: './alma.component.html',
  styleUrl: './alma.component.scss',
})
export class AlmaComponent {

  @Input() subtitle = "alma";

  @Output() titleClick = new EventEmitter();

  title = "Pite";
  felirat = "Ez más pite";

  modify():void{
    this.felirat = "Ez egy be nem töltött kép"
  }

  onClickTitle():void{
    this.titleClick.emit(this.felirat);
  }
}