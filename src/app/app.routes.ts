import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CareerComponent } from './career/career.component';
import { ProjectsComponent } from './projects/projects.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'career', component: CareerComponent },
  { path: 'project', component: ProjectsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

// Define the extra options for the router
const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
