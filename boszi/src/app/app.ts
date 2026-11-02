import { Component,} from '@angular/core';
import { BoszorkanyKonyhaComponent } from './boszorkany-konyha/boszorkany-konyha.component';

@Component({
  imports: [BoszorkanyKonyhaComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
}
