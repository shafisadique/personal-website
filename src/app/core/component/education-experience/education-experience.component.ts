import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Experience {
  year: string;
  skills:any;
  title: string;
  company:string;
  description: string;
  imageSrc: string; // Placeholder for image
  isExpanded: boolean; // Track expanded state
  preview: string; // First three lines for preview
}
@Component({
  selector: 'app-education-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education-experience.component.html',
  styleUrl: './education-experience.component.css'
})
export class EducationExperienceComponent {
   experiences: Experience[] = [
    {
      year: 'Aug 2023 - Present',
      title: 'MEAN Stack Developer',
      company: 'MiraiGate Technology Pvt. Ltd.',
      description: 'Developed and maintained Admin Panel, Power Panel, and Client Panel using Angular 18. The Admin Panel features role-based authentication and authorization for a hierarchy of users (Admin, Sub-Admin, Master, Super Agent, Agent, Client), with functionalities to set coin limits for all users, manage cash transactions, and maintain a ledger. It also includes an In-Play section for real-time match updates. The Power Panel enables secure game setup for cricket matches, allowing configuration of back and lay numbers with enhanced security measures. The Client Panel is a user-facing website where clients can play games and view match-related data like the Match & Session Plus Minus report.',
      imageSrc: 'assets/miraigate-admin-panel.png',
      isExpanded: false,
      preview: '',
      skills: ["Angular 14 to 19", "NodeJs", "MongoDB", "Bootstrap", "Express JS", "Typescript","rxjs"]
    },
    {
      year: 'Dec 2022 - Mar 2023',
      title: 'Angular Developer',
      company:' NAVSOFT Pvt. Ltd.',
      description: 'Worked on Travel Smart, a client-side travel app, using Angular Material and ElasticSearch API. Implemented lazy loading, CRUD operations with Elastic API, and created forms for hotels and restaurants, storing data in a unified table structure.',
      imageSrc: 'assets/navsoft-travel-smart.png',
      isExpanded: false,
      preview: '',
      skills: ["Angular 14", "Angular Material", "Elastic Search", "rxjs"]

    },
    {
      year: 'Jan 2022 - Nov 2022',
      title: 'Angular & Node.js Developer - ',
      company:'Vintek Solution Pvt. Ltd.(codeup)',
      description: 'Contributed to the Seven Lake Project, an insurance app, by generating leads, implementing authentication and authorization, storing client information end-to-end, creating charts for lead generation, and designing the UI for a payment gateway.',
      imageSrc: 'assets/vintek-seven-lake.png',
      isExpanded: false,
      preview: '',
      skills: ["Angular 8", "NodeJs", "aws", "Ngb-module", "Bootstrap", "React.js","Typescript"]
    },
    {
      year: 'OCT 2019 – Apr 2020',
      title: 'Angular Developer',
      company:'Mavyah Technologies Pvt. Ltd.',
      description: 'Create school management web-app(client side project), an insurance app, by generating leads, implementing authentication and authorization, storing client information end-to-end, creating charts for lead generation, and designing the UI for a payment gateway.',
      imageSrc: 'assets/vintek-seven-lake.png',
      isExpanded: false,
      preview: '',
      skills: ["Angular 8", "NodeJs", "aws", "Ngb-module", "Bootstrap", "React.js","Typescript"]
    },
    
    
  ];

  constructor() {
    // Compute preview (first three lines) for each experience
    // this.experiences.forEach(experience => {
    //   const lines = experience.description.split('. ').filter(line => line.trim() !== '');
    //   experience.preview = lines.slice(0, 1).join('. ') + (lines.length > 6 ? '...' : '.');
    // });
  }

  // toggleDescription(experience: Experience) {
  //   experience.isExpanded = !experience.isExpanded;
  // }
}
