import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-details',
  styleUrl: './details.component.scss',
  templateUrl: './details.component.html',
})
export class DetailsComponent {
  @Input() id?:number;
}
