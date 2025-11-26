import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login.component',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  LoginPassword: string = "";
  loginEmail: string = "";
  Submit()
  {
    console.log("Email: " + this.loginEmail + " Password: " + this.LoginPassword);
  }
  // constructeur Rooter
  constructor(private router : Router) {}

  redirectToHome() {
    this.router.navigate(['']);
  }
}