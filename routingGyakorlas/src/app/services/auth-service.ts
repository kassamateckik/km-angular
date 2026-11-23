import { Injectable, Service, signal, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn : "root"
})

export class AuthService {
    private readonly route = inject(Router);

    isLoggedIn = signal<boolean>(localStorage.getItem("isLoggedIn") === "true");

    login(name:string, password:string) {
        if (name == "admin" && password === "admin") {
            this.isLoggedIn.set(true);
            localStorage.setItem("isLoggedIn", "true");
        }
        else this.isLoggedIn.set(false);
    }

    logout() {
        localStorage.setItem("isLoggedIn", "false");
        this.isLoggedIn.set(false);
    }
}
