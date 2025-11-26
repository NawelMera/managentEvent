import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login.component',
  imports: [MatButtonModule, FormsModule],
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
}