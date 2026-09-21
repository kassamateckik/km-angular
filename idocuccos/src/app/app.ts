import { Component, signal } from '@angular/core';
import { ZonazoComponent } from './zonazo/zonazo.component';

@Component({
  selector: 'app-root',
  imports: [ZonazoComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('idocuccos');
}
