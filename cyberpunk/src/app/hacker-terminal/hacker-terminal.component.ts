import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { AdatCsomag } from './hacker-terminal.model';
import { KodoloPipe } from '../kodolo-pipe';
import { KockazatPipe } from '../kockazat-pipe';
import { BehatolasErzekelo } from '../behatolas-erzekelo';
import { Karanten } from '../karanten';

@Component({
  imports: [KodoloPipe, KockazatPipe, BehatolasErzekelo, Karanten],
  selector: 'app-hacker-terminal',
  styleUrl: './hacker-terminal.component.scss',
  templateUrl: './hacker-terminal.component.html',
})
export class HackerTerminalComponent {
  @Input() adat:AdatCsomag|undefined;
  @Output() karantenbaplusz:EventEmitter<void> = new EventEmitter<void>();

  karantenba(){
    this.karantenbaplusz.emit();
  }
}
