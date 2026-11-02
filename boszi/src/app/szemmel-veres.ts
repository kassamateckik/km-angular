import { ChangeDetectorRef, Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSzemmelVeres]',
})
export class SzemmelVeres {

  constructor(private ref:ChangeDetectorRef){

  }

  timeout:any;

  @HostBinding("class.megatkozott") megatkozas = false;

  @HostListener("mouseenter")
  onBamulas(){
    this.timeout = setTimeout(() => {
      this.megatkozas = true;
      this.ref.markForCheck();
    }, 2000);
  }
  
  @HostListener("mouseleave")
  onNincsbamulas(){
    clearTimeout(this.timeout);
    this.megatkozas = false;
  }
}
