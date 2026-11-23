import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Autentikacio } from './services/autentikacio';

export const authGuardGuard: CanActivateFn = () => {
  const authService=inject(Autentikacio);
  const router=inject(Router);

  if (authService.isLogin()) {
    return true;
  }

  return router.navigate(['\bejelentkezes'])
};
