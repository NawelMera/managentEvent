import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Login {
  getLogin()
  {
    return "Login";
  }
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  isValidPassword(password: string): boolean {
    //complexité du mot de passe : au moins 8 caractères comprenant au moins une lettre majuscule, au moins un chiffre et au moins une lettre minuscule
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[a-z]).{8,}$/;
    return passwordRegex.test(password);
  }

  isValidLoginForm(email: string, password: string): boolean {
    return this.isValidEmail(email) && this.isValidPassword(password);
  }
}
