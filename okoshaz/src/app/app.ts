import { Component, signal } from '@angular/core';
import { LampaVezerlo } from './lampa-vezerlo/lampa-vezerlo';

@Component({
  selector: 'app-root',
  imports: [LampaVezerlo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('okoshaz');
}
