import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Subscribe {
  
  getSubscribe() {
    return "Subscribe to our newsletter";
  }
  //Verifier la validité de l'adresse email
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
}
