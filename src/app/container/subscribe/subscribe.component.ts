import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import du service subscribe
import { Subscribe } from '../../service/subscribe/subscribe.service';
import { Router } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { Email, EmailService } from 'core/api';
@Component({
  selector: 'app-subscribe.component',
  imports: [FormsModule, MatSlideToggleModule],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.scss',
})
export class SubscribeComponent {
  
  subscribeEmail: string = "";
  subscribe = new Subscribe();
  submit()
  {
   
    console.log("Email: " + this.subscribeEmail);
    console.log(this.subscribe.isValidEmail(this.subscribeEmail));
    if(this.subscribe.isValidEmail(this.subscribeEmail)){
      const emailData  : Email = {
        email: this.subscribeEmail
      };
      return this.emailService.addEmail(emailData).subscribe(response => {
        console.log('Event created successfully', response);
      });
      alert("Merci pour votre souscription");

    }else{
      alert("l'email saisi n'est pas valide");
    }
  }

  constructor(private router : Router , private emailService: EmailService) {}

  redirectToHome() {
    this.router.navigate(['']);
  }
}
