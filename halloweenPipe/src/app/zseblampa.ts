import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appZseblampa]',
})
export class Zseblampa {

  @HostBinding("class.retteges") vilagitas = false;

  @HostListener("mouseenter")
  onVilagit(){
    this.vilagitas = true;
  }

  @HostListener("mouseleave")
  onLekapcsol(){
    this.vilagitas = false;
  }
}
