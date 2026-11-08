import { ChangeDetectorRef, Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appKaranten]',
})
export class Karanten {
  constructor (private ref:ChangeDetectorRef){}
  @Output() karantenba:EventEmitter<void> = new EventEmitter<void>();

  timeout:NodeJS.Timeout|undefined;

  @HostBinding("class.karantenban") karanten = false;

  @HostListener("click") 
  onKatt(){
    this.karanten = true;
    this.karantenba.emit();
  }
}
