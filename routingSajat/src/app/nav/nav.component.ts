import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Authentikacio } from '../services/authentikacio';

@Component({
  imports: [RouterLink],
  selector: 'app-nav',
  styleUrl: './nav.component.scss',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  private readonly authService = inject(Authentikacio);
}
