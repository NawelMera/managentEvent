import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import du service subscribe
import { Router } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { Email, EmailService } from 'core/services';

@Component({
  selector: 'app-subscribe.container',
  imports: [FormsModule, MatSlideToggleModule],
  templateUrl: './subscribe.container.html',
  styleUrls: ['./subscribe.container.scss'],
})
export class SubscribeComponent {
  
  subscribeEmail: string = "";
  return: string = "";
  constructor(private router : Router, private emailService: EmailService) {}
  Submit()
  {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(this.subscribeEmail)) {
      this.return = 'Veuillez entrer une adresse email valide.';
      return;
    }else{
        const email : Email = { email: this.subscribeEmail} ;
        this.emailService.addEmail(email).subscribe(() => {
          this.return = 'Inscription réussie !';
        });
  }
}
    
redirectToHome() {
    this.router.navigate(['']);
  }
}
