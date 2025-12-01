import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class Header {
  connexion: boolean = false;
  constructor(
    private router: Router,
  ) {}
 ngOnInit() {
    this.connexion = localStorage.getItem('connexion') === 'true';

    window.addEventListener('connexion-change', () => {
      this.connexion = localStorage.getItem('connexion') === 'true';
    });
  }

  logout() {
    localStorage.setItem('connexion', 'false');
    window.dispatchEvent(new Event('connexion-change'));
    this.connexion = false;
    this.router.navigate(['']); 
  }

  redirectToLogin() {   
    this.router.navigate(['login']);
    
  }

  redirectToRegister() {
    this.router.navigate(['subscribe']);
  }

  redirectToHome() {
    this.router.navigate(['home']);
  }

  redirectToEventCreate() {
    this.router.navigate(['event/create']);
  }

  redirectToModifyTags() {
    this.router.navigate(['tags']);
  }
}
