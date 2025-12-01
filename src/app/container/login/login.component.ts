import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUserRequest, UserService } from 'core/services';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-login.component',
  imports: [FormsModule],
  providers: [UserService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})

export class LoginComponent {
  constructor(private router: Router, private userService :UserService) {}
  loginPassword: string = "";
  loginEmail: string = "";
  regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  message: string = "";
  submit(){
    const userData : LoginUserRequest = {
      username: this.loginEmail,
      password: this.loginPassword
    };
    if(!this.regexEmail.test(this.loginEmail)){
      this.message = 'Veuillez entrer une adresse email valide.';
      return;
    }

    this.userService.loginUser(userData).subscribe({
      next: (response) => {
        console.log(response);
        localStorage.setItem('connexion', 'true');
        window.dispatchEvent(new Event('connexion-change'));
        this.router.navigate(['']);  
      },
      error: (err) => {
        if (err.status === 400) {
          alert('Email ou mot de passe incorrect.');
        }
        console.error('Erreur lors de la connexion :', err);
      }
    });
  }
  redirectToHome(){
    this.router.navigate(['']);
  }
}