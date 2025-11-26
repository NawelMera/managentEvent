import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';

import { Login } from '@service/login/login';


@Component({
  selector: 'app-login.component',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})

export class LoginComponent {
 

  constructor(private router: Router, private authService: AuthService) {}
  loginPassword: string = "";
  loginEmail: string = "";
  login = new Login();
  submit()
  {
    if(!this.login.isValidLoginForm(this.loginEmail, this.loginPassword))
    {
      alert("Email ou mot de passe incorrect");
    }
    console.log('Email: ' + this.loginEmail + ' Password: ' + this.loginPassword);
    this.authService.login(); 
    this.router.navigate(['']);
  }
  redirectToHome(){
    this.router.navigate(['']);
  }
}