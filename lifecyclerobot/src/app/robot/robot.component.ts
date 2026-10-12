import { ChangeDetectorRef, Component, Input, SimpleChange } from '@angular/core';
import { CurrencyPipe, DatePipe, DecimalPipe, NgStyle, UpperCasePipe } from '@angular/common';

@Component({
  imports: [UpperCasePipe, DatePipe, CurrencyPipe, DecimalPipe, NgStyle],
  selector: 'app-robot',
  styleUrl: './robot.component.scss',
  templateUrl: './robot.component.html',
})
export class RobotComponent {
  @Input() etetesekSzama:number = 0;

  nev:string = "r2-d2";
  szuletesiIdo:Date = new Date();
  ar:number = 25000000;
  energiaSzint:number = 100;

  interval:NodeJS.Timeout | undefined;

  hatterszin():string {
    if (this.energiaSzint <= 20) return "veszely";
    else if (this.energiaSzint <= 50) return "faradt";
    else return "boldog";
  }

  constructor(private ref:ChangeDetectorRef) {
    console.log("1. Constructor fut (Az @Input() még nem érkezett meg.)");
  }

  ngOnChanges(changes:SimpleChange):void {
    console.log("2. ngOnChanges: Bemenet változott!");
    this.energiaSzint += 20;
    if (this.energiaSzint > 100) this.energiaSzint = 100;
    console.log(changes);
  }

  ngOnInit():void {
    this.interval = setInterval(() => {
      if (this.energiaSzint > 0) {
        this.energiaSzint -= 5;
        this.ref.markForCheck();
      }
    }, 1000);
    console.log("3. ngOnInit: Robot felébredt, éhezés indul!");
  }

  ngAfterViewInint():void {
    console.log("4. ngAfterViewInit: A HTML sablon és az energiasáv kirajzolódott!");
  }

  ngOnDestroy():void {
    clearInterval(this.interval);
    console.log("5. ngOnDestroy: Robot megsemmisült, memóriaszivárgás elhárítva!");
  }
}
