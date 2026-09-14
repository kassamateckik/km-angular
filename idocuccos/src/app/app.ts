import { Component, signal } from '@angular/core';
import { Idozona } from './idozona/idozona';

@Component({
  selector: 'app-root',
  imports: [Idozona],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('idocuccos');
}
