import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import du service subscribe
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
  constructor(private router : Router) {}
  Submit()
  {
    this.redirectToHome();
  }
redirectToHome() {
    this.router.navigate(['']);
  }
}
