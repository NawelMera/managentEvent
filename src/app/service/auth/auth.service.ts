import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   public connexion = signal(localStorage.getItem('connexion') === 'true');

  login() {
    this.connexion.set(true);
    localStorage.setItem('connexion', 'true'); // On garde true même après reload
  }

  logout() {
    this.connexion.set(false);
    localStorage.setItem('connexion', 'false');
  }
}