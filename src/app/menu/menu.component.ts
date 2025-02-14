import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  
  constructor(private router: Router) { }
    menuOpen = false;
  
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  
    closeMenu() {
      this.menuOpen = false;
    }
    navigateToadinadin() {
      this.router.navigate(['/admin']);
    }
  
}
