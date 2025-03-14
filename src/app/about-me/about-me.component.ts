import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css', './mediaQuery.css'],
})
export class AboutMeComponent {
  imageload = false;
  imageloaded() {
    this.imageload = true;
  }
}
