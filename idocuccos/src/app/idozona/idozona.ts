import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-idozona',
  imports: [],
  templateUrl: './idozona.html',
  styleUrl: './idozona.scss',
})
export class Idozona {
  @Input() timezone:string = "";
  @Input() isLocal:boolean = false;

  @Output() marking = new EventEmitter();

  timezoneWrite = "";

  update(){
    this.timezoneWrite = new Date().toLocaleString("en-US", {timeZone : this.timezone});
  }

  mark(){
    this.isLocal = true;
    this.marking.emit();
  }

  demark(){
    this.isLocal = false;
  }
}
