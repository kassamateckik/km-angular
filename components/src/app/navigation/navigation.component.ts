import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-navigation',
  imports: [ButtonComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent {}
