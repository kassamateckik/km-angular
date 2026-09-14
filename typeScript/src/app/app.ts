import { Component, signal } from '@angular/core';
import { AlmaComponent } from './alma/alma.component';

@Component({
  selector: 'app-root',
  imports: [AlmaComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('typeScript');
}
