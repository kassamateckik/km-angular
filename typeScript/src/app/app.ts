import { Component } from '@angular/core';
import { AlmaComponent } from './alma/alma.component';

@Component({
  selector: 'app-root',
  imports: [AlmaComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  st = "Ez lesz majd a felirat"

  titleClick(text:string){
    this.st = text;
  }
}
