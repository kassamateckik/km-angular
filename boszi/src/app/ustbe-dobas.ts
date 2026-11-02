import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appUstbeDobas]',
})
export class UstbeDobas {

  @HostBinding("class.beleesett") beleesett = false;

  @HostListener("click")
  onKatt(){
    this.beleesett = true;
  }
}
