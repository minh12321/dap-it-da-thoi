import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: false
})
export class AppComponent {
  title = 'F88';

  constructor(private router: Router) { }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  menuItems = [
    { label: 'Trang Chủ', icon: 'fa-solid fa-house',route:'/home', isExpanded: false },
    { label: 'Giày hiệu', icon: 'fa-solid fa-shoe-prints',route:'/home', isExpanded: false },
    { label: 'Giày đinh', icon: 'fa-solid fa-shoe-prints',route:'/home', isExpanded: false },
    { label: 'Găng tay', icon: 'fa-solid fa-hand',route:'/home', isExpanded: false },
    { label: 'Phụ kiện', icon: 'fa-solid fa-toolbox',route:'/home', isExpanded: false },
    { label: 'Danh mục', icon: 'fa-solid fa-list',route:'/home', isExpanded: false }
  ];

  toggleMenu(item: any): void {
    item.isExpanded = !item.isExpanded;
  }
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
