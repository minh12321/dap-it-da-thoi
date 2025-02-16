import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent {

  constructor(private router: Router) { }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToAccountEdit() {
    this.router.navigate(['/account-edit']);
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  
  navigateToAccount() {
    this.router.navigate(['/account']);
  }
  
}
