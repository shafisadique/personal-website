import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { AboutusComponent } from './core/component/aboutus/aboutus.component';
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route redirects to 'home'
  {
    path: 'home',
    loadComponent: () => import('./core/component/body/body.component').then((c) => c.BodyComponent)
  },
  { path: 'experience',
    loadComponent: () => import('./core/component/education-experience/education-experience.component').then((c) => c.EducationExperienceComponent)
  },
  { path: 'skills',
    loadComponent: () => import('./core/component/skill/skill.component').then((c) => c.SkillComponent)
  },
  { path: 'contact',
    loadComponent: () => import('./contact-us/contact-us.component').then((c) => c.ContactUsComponent)
  },
  { path: 'about-us', component: AboutusComponent },
  { path: 'project', component: ProjectsComponent },
  { path: 'images', component: ProjectsComponent }, // Assuming 'IMAGES' also maps to ProjectsComponent for now
  { path: '**', redirectTo: 'home' } // Wildcard route for invalid URLs
];