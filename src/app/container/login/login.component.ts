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
  loginEmail: string = '';
  loginPassword: string = '';

  constructor(private router: Router, private authService: AuthService) {}
  LoginPassword: string = "";
  loginEmail: string = "";
  login = new Login();
  Submit()
  {
    console.log("Email: " + this.loginEmail + " Password: " + this.LoginPassword);
    //verification de la syntaxe de l'adresse email
    console.log(this.login.isValidLoginForm(this.loginEmail, this.LoginPassword));
    if(!this.login.isValidLoginForm(this.loginEmail, this.LoginPassword))
    {
      alert("Email ou mot de passe incorrect");
    }
  }
  // constructeur Rooter
  constructor(private router : Router) {}

  submit() {
    console.log('Email: ' + this.loginEmail + ' Password: ' + this.loginPassword);
    this.authService.login(); 
    this.router.navigate(['']); 
  }
  redirectToHome(){
    this.router.navigate(['']);
  }
}