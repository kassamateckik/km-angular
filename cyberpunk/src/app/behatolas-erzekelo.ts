import { ChangeDetectorRef, Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBehatolasErzekelo]',
})
export class BehatolasErzekelo {
  constructor (private ref:ChangeDetectorRef){}

  timeout:NodeJS.Timeout|undefined;

  @HostBinding("class.riado") riado = false;

  @HostListener("mouseenter") 
  onBe(){
    this.timeout = setTimeout(() => {
      this.riado = true;
      this.ref.detectChanges();
    }, 1500);
  }

  @HostListener("mouseleave") 
  onKi(){
    clearTimeout(this.timeout);
    this.riado = false;
  }
}
