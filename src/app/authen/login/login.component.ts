import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  message: string;

  constructor( public router: Router) {
    this.message = this.getMessage();
  }

  getMessage() {
    return 'Logged ' ;
  }

  login() {
    this.message = 'Trying to log in ...';
  }

  logout() {
    this.message = this.getMessage();
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
