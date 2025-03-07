import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state) => {
  const router = inject(Router);

  if (!localStorage.getItem('session')){
    router.navigate(['/login']);
  }
  return true;
};
