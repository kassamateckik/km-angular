import { Component, signal } from '@angular/core';
import { RobotComponent } from './robot/robot.component';

@Component({
  imports: [RobotComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  kapcsolo:boolean = true;
  gombfelirat:string = "Robot létrehozása";
  etetesSzamlalo:number = 0;

  gombkattint():void{
    if (!this.kapcsolo) this.gombfelirat = "Robot létrehozása"; 
    else this.gombfelirat = "Robot megsemmisítése";
    this.kapcsolo = !this.kapcsolo;
  }

  etet():void {
    this.etetesSzamlalo ++;
  }
}
