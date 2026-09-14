import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alma',
  imports: [FormsModule],
  templateUrl: './alma.component.html',
  styleUrl: './alma.component.scss',
})
export class AlmaComponent {

  @Input() subtitle = "alma";

  @Output() titleClick = new EventEmitter<string>();

  title = "Pite";
  felirat = "Ez más pite";

  modify():void{
    this.felirat = "Ez egy be nem töltött kép"
  }

  onClickTitle():void{
    this.titleClick.emit(this.felirat);
  }
}