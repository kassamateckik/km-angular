import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.component.scss',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  name = "admin";
  password = "admin";

  login() {
    this.authService.login(this.name, this.password);
    if (this.authService.isLoggedIn()){
      this.router.navigate(["admin/profile"]);
    }
  };
}
