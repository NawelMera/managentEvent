import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor( private router: Router) {}
  connexion: boolean = false;

  canActivate: CanActivateFn = () => {
     this.connexion = localStorage.getItem('connexion') === 'true';
    if (this.connexion) {
      return true; // autorisé
    }
    // sinon on redirige
    this.router.navigate(['/login']);
    return false;
  };
}
