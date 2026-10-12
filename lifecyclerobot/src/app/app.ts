import { Component, signal } from '@angular/core';
import { RobotComponent } from './robot/robot.component';

@Component({
  imports: [RobotComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
}
