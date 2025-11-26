import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import du service subscribe
import { Subscribe } from '../../service/subscribe/subscribe.service';
import { Router } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@Component({
  selector: 'app-subscribe.component',
  imports: [FormsModule, MatSlideToggleModule],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.scss',
})
export class SubscribeComponent {
  
  subscribeEmail: string = "";
  subscribe = new Subscribe();
  Submit()
  {
    console.log("Email: " + this.subscribeEmail);
    console.log(this.subscribe.isValidEmail(this.subscribeEmail));
    if(this.subscribe.isValidEmail(this.subscribeEmail))
      alert("Merci pour votre souscription");
    else
      alert("l'email saisi n'est pas valide");
  }

  constructor(private router : Router) {}

  redirectToHome() {
    this.router.navigate(['']);
  }
}
