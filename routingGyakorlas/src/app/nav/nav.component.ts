import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-nav',
  styleUrl: './nav.component.scss',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  private readonly authService = inject(AuthService);

  logout() {
    this.authService.logout();
  }
}
