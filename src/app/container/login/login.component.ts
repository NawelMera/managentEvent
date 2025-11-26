import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-login.component',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginEmail: string = '';
  loginPassword: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  submit() {
    console.log('Email: ' + this.loginEmail + ' Password: ' + this.loginPassword);
    this.authService.login(); 
    this.router.navigate(['']); 
  }
  redirectToHome(){
    this.router.navigate(['']);
  }
}