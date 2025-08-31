import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';

import { FooterComponent } from './layouts/footer/footer.component';
import { BodyComponent } from './core/component/body/body.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutusComponent } from './core/component/aboutus/aboutus.component';
import { EducationExperienceComponent } from './core/component/education-experience/education-experience.component';
import { SkillComponent } from './core/component/skill/skill.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,BodyComponent,ContactUsComponent,AboutusComponent,EducationExperienceComponent,SkillComponent,ProjectsComponent,FooterComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sadique-website';
}
