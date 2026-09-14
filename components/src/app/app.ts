import { Component, signal } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [ NavigationComponent, MainComponent, FooterComponent ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('components');
}
