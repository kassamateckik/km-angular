import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zona',
  imports: [],
  templateUrl: './zona.component.html',
  styleUrl: './zona.component.scss',
})
export class ZonaComponent {
  @Input() timezone:string = "";
  @Input() isLocal:boolean = false;

  @Output() marker = new EventEmitter();

  time = "";

  mark(){
    this.isLocal = true;
    this.marker.emit(this.timezone);
  }

  update(){
    this.time = new Date().toLocaleString("en-US", {timeZone: this.timezone});
  }
}
