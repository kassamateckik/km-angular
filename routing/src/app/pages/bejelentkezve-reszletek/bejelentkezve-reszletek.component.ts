import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-bejelentkezve-reszletek',
  styleUrl: './bejelentkezve-reszletek.component.scss',
  templateUrl: './bejelentkezve-reszletek.component.html',
})
export class BejelentkezveReszletekComponent {
  @Input() id?:string;

  id2:string|null="";
  id3:string|null="";

  private readonly router=inject(ActivatedRoute);

  ngOnInit() {
    this.id2=this.router.snapshot.paramMap.get('id');
    this.router.paramMap.subscribe(param=> {
      this.id3=param.get('id');
    })
  }


}
