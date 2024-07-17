import { Component, OnInit } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';

import { CommonModule, ViewportScroller } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './mediaQuery.css'],
  imports: [CommonModule, ProjectsComponent],
})
export class HomeComponent implements OnInit {
  imageload = false;

  downloadFile() {
    const link = document.createElement('a');
    link.href =
      'https://firebasestorage.googleapis.com/v0/b/profile-cg.appspot.com/o/Chandan_Resume.pdf?alt=media&token=d4a39472-176f-4d00-8bba-4bf1c15f85ed';
    link.download = 'Chandan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    // Scroll to the fragment if present
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  imageloaded() {
    this.imageload = true;
  }
}
