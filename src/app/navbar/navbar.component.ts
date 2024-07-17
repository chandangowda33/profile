import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', './mediaQuery.css'],
})
export class NavbarComponent {
  activeLink: string = 'home';
  menu: boolean = false;

  constructor(private route: Router) {
    console.log(this.menu);
  }

  goToProject(): void {
    this.route.navigate(['/home'], { state: { scrollTo: 'project' } });
  }

  setActiveLink(link: string) {
    this.activeLink = link;
    if (link === 'about') {
      this.route.navigate(['/about']);
    } else if (link === 'career') {
      this.route.navigate(['/career']);
    }
  }

  menuToggle() {
    this.menu = !this.menu;
    console.log(this.menu);
  }
}
