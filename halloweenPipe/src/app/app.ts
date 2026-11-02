import { Component } from '@angular/core';
import { SzellemNyelvPipe } from './szellem-nyelv-pipe';
import { Zseblampa } from './zseblampa';

@Component({
  imports: [SzellemNyelvPipe, Zseblampa],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
}
