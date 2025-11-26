import { Component } from '@angular/core';
import { AuthService } from '@service/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor( private router: Router, public authService: AuthService) {}
   logout() {
    this.authService.logout(); 
    this.router.navigate(['']); 
  }
  redirectToLogin(){
    this.router.navigate(['login']);
  }
  redirectToHome() {
    this.router.navigate(['home']);
  }

}
