import { Injectable, Service, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Autentikacio {
    isLogin=signal<boolean>(localStorage.getItem('id')==="true");

    constructor() {
        if (localStorage.getItem("isLogin") !== null) {
                this.isLogin.set(localStorage.getItem('isLogin') === "true");
            }
    }

    login(fn:string, pw:string) {
        if (fn==="admin" && pw==="admin") {
            this.isLogin.set(true);
            localStorage.setItem("isLogin","true");
        }
    }

    logout() {
        this.isLogin.set(false);
        localStorage.setItem("isLogin","false");
    }
}
