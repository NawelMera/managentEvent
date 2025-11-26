import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './service/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate: CanActivateFn = () => {
    if (this.auth.connexion()) {
      return true; // autorisé
    }
    // sinon on redirige
    this.router.navigate(['/login']);
    return false;
  };
}
