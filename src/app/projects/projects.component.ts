import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css', './mediaQuery.css'],
})
export class ProjectsComponent {
  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) {
    // this.route.fragment.subscribe((fragment: string | null) => {
    //   if (fragment) {
    //     this.viewportScroller.scrollToAnchor(fragment);
    //   }
    // });
  }
}
