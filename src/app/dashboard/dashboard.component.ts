import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userName: string = 'Admin ';
  searchQuery: string = '';

  constructor(private router: Router) {}

  toggleDropdown(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.classList.toggle("hidden");
    }
  }

  onSearchChange(event: any) {
    console.log('بحث عن:', this.searchQuery);
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
