import { Component, signal } from '@angular/core';
import { OsztalyComponent } from './osztaly/osztaly.component';

@Component({
  selector: 'app-root',
  imports: [OsztalyComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ENaplo');
}
