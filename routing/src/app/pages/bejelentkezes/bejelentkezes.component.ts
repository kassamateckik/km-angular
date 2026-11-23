import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Autentikacio } from '../../services/autentikacio';
import { Router } from '@angular/router';


@Component({
  imports: [FormsModule],
  selector: 'app-bejelentkezes',
  styleUrl: './bejelentkezes.component.scss',
  templateUrl: './bejelentkezes.component.html',
})
export class BejelentkezesComponent {
  private readonly autentikacio=inject(Autentikacio);
  private readonly router=inject(Router);
  private readonly chr=inject(ChangeDetectorRef);

  fnev:string="admin";
  pw:string="admin";

  bejelentkezes() {
    this.autentikacio.login(this.fnev, this.pw);
    if (this.autentikacio.isLogin()) {
      this.router.navigate(['/bejelentkezve']);
      this.chr.detectChanges();
    } else {
      //hiba
    }
  }


}
