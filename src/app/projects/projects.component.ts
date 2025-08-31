import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  tabs: string[] = ['All', 'Web App', 'Website', 'Game'];
  selectedTab: number = 0;
  showPopup: boolean = false;
  selectedProject: any = null;
  currentImageIndex: number = 0; // Track current image in the slider

  // Array of projects with videoSrc
  projects = [
    {
      title: 'Travel Smart',
      description: 'Developed at NAVSOFT Pvt. Ltd. from Dec 2022 to March 2023 using Angular Material and ElasticSearch API. Roles and responsibilities included: working on Angular Material with lazy loading, creating CRUD operations in Elastic API, implementing one table for all components, and creating Hotel and Restaurant forms to store in the database.',
      videoSrc: '/assets/video1.webm',
      category: 'Web App',
      images: [
        'assets/ts2.png',
        'assets/ts3.png',
        'assets/ts4.png',
        'assets/ts5.png',
        'assets/ts6.png',
        'assets/ts7.png',
      ],
    },
    {
      title: 'Game Admin Panel',
      description: 'Developed at MiraiGate Technology Pvt. Ltd. from August 2023 to present using the MEAN stack (MongoDB, Express.js, Angular, Node.js). This project involved designing and implementing a robust admin panel with role-based authentication and authorization to manage a hierarchical structure of users: Admin, Sub-Admin, Master, Super Agent, Agent, and Client. The Admin oversees all operations and sets shares for Sub-Admins, who in turn allocate shares to Masters. Masters distribute shares to Super Agents, Super Agents to Agents, and Agents to Clients, ensuring a streamlined top-down management system.',
      videoSrc: '/assets/game-panel.webm',
      category: 'Web App',
      images: [
        'assets/A1.png',
        'assets/A2.png',
        'assets/A4.jpeg',
        'assets/A5.jpeg',
        'assets/A6.jpeg',
        'assets/A7.jpeg',

      ]
    },
    {
      title: 'Power Panel',
      description: 'Lorem ipsum dolor sit amet...',
      videoSrc: '/assets/power-panel.webm',
      category: 'Web App',
    },
    {
      title: 'Finance Agents',
      description: 'Lorem ipsum dolor sit amet...',
      videoSrc: '/assets/sevenlake.webm',
      category: 'Web App',
    },
    {
      title: 'Probobet Website',
      description: 'Lorem ipsum dolor sit amet...',
      videoSrc: '/assets/probobet.webm',
      category: 'Website',
       images: [
        'assets/p3.png',
        'assets/p1.png',
        'assets/p2.png',
        'assets/p4.png',
        'assets/p5.png',
        'assets/p6.png',
        'assets/p7.png',
      ]
    },
    {
      title: '10Bets Website',
      description: 'Lorem ipsum dolor sit amet...',
      videoSrc: '/assets/10Bets.webm',
      category: 'Website',
    },
    {
      title: 'Housie Game',
      description: 'Lorem ipsum dolor sit amet...',
      videoSrc: '/assets/housie.webm',
      category: 'Game',
    },
    {
      title: 'Helix CatFish Game',
      description: 'Lorem ipsum dolor sit amet...',
      videoSrc: 'assets/helix-catfish.webm',
      category: 'Game',
    },
  ];

gitProjects = [
  {
    category: 'Angular 19',
    featured: true,
    title: 'Probobet',
    descriptionList: [
      'Client-side Angular project for betting platform',
      'View sports events and matches with real-time odds',
      'Place bets with reactive forms and validation',
      'Monitor ongoing games, leaderboard, and betting history',
      'Secure JWT authentication with protected routes'
    ],
    technologies: ['Angular', 'TypeScript', 'CSS', 'Netlify', 'Socket.IO'],
    stars: 12,
    forks: 3,
    views: 8,
    codeLink: 'https://github.com/shafisadique/ProbobetCode',
    demoLink: ''
  },

  {
    category: 'Angular',
    featured: false,
    title: 'Admin Panel In Angular',
    descriptionList: [
      'Role-based hierarchy: Super Admin → Admin → Master → Super → Agent → Client',
      'Fund & share management with automatic distribution',
      'Track in-play & completed games with profit/loss reporting',
      'JWT-based authentication with IP tracking',
      'User activity monitoring with real-time session logs'
    ],
    technologies: ['Angular', 'Bootstrap', 'ngb-module', 'CSS'],
    stars: 25,
    forks: 5,
    views: 45,
    codeLink: 'https://github.com/shafisadique/AdminPanel',
    demoLink: 'https://ecommerce-demo.com'
  },

  {
    category: 'Angular',
    featured: true,
    title: 'Power Panel',
    company: 'MiraiGate Technology Pvt. Ltd.',
    duration: 'August 2023 – Present',
    stack: 'MEAN Stack (MongoDB, Express.js, Angular, Node.js)',
    description: 'Power Panel is a centralized administration system for managing sports matches, betting odds (bhaw), and user accounts. It provides real-time control over match creation, odds updates, and hierarchical user management with secure authentication.',
    descriptionList: [
      'Developed a web-based admin system to create and manage live matches with configurable details (teams, categories, start times, and status).',
      'Implemented odds (bhaw) management with real-time updates using Socket.IO, allowing admins to lock/unlock markets instantly.',
      'Integrated activity logging for all actions (match created, odds updated, bet placed) with user login/IP tracking.',
      'Created reporting modules for profit/loss per match, settled/unsettled bets, and user exposure.'
    ],
    technologies: ['Angular', 'Bootstrap', 'css'],
    stars: 28,
    forks: 8,
    views: 120,
    codeLink: 'https://github.com/shafisadique/power-Panel',
    demoLink: ''
  },

{
  category: 'Angular And Nodejs',
  featured: true,
  title: 'Finance Agent App',
  descriptionList: [
    'Lead management system to track client funding opportunities, commissions, and contract notes',
    'Agent onboarding via invitation (email/phone sync) with role-based access',
    'Document repository for storing and verifying financial files securely',
    'Marketing module for tracking campaigns and outreach performance',
    'Training hub for agent learning and progress monitoring',
    'Comprehensive account management with permissions and activity logs'
  ],
  technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'JWT'],
  stars: 18,
  forks: 6,
  views: 72,
  codeLink: 'https://github.com/finance-agent-app',
  demoLink: 'https://finance-agent-demo.com'
},
{
    category: 'angular',
    featured: true,
    title: 'Travel Smart',
    duration: 'Dec 2022 – Mar 2023',
    company: 'NAVSOFT Pvt. Ltd.',
    description: 'TravelSmart Admin Panel: admin dashboard for users, hotels, restaurants, reviews and favorites with ElasticSearch powered search and analytics.',
    descriptionList: [
      'Dashboard & Analytics with interactive charts for verification, user status, hotel/restaurant data and favorites.',
      'User Management with role-based verification, registration, filters and bulk actions (edit/delete/download).',
      'Hotel & Restaurant CRUD modules with detailed forms (name, address, amenities, images).',
      'ElasticSearch integration for fast search and advanced filters by city/country/rating.',
      'Review Management and member favorites tracking.',
      'Reusable table component across modules and Angular Material with lazy loading.'
    ],
    technologies: ['Angular', 'Angular Material', 'ElasticSearch API', 'REST APIs'],
    stars: 31,
    forks: 12,
    views: 100,
    codeLink: 'https://github.com/shafisadique/navsoft',
    demoLink: 'https://travel-smart-demo.com'
  },
  {
    category: 'frontend',
    featured: false,
    title: 'Blog Platform',
    descriptionList: [
      'A blogging platform with Markdown support and comments.',
      'Editor support and category/tag filtering.',
      'User profile and comment moderation.'
    ],
    technologies: ['Angular', 'Firebase', 'Tailwind CSS'],
    stars: 9,
    forks: 2,
    views: 20,
    codeLink: 'https://github.com/blog-platform',
    demoLink: 'https://blog-demo.com'
  },

  

  {
    category: 'productivity',
    featured: false,
    title: 'Task Manager',
    descriptionList: [
      'Kanban-style task manager with drag-and-drop functionality.',
      'User stories, labels, and due date reminders.'
    ],
    technologies: ['Angular', 'Node.js', 'MongoDB'],
    stars: 15,
    forks: 4,
    views: 50,
    codeLink: 'https://github.com/task-manager',
    demoLink: 'https://task-manager-demo.com'
  }
];


  // Get the currently selected tab's content
  get selectedTabContent(): string {
    return this.tabs[this.selectedTab];
  }

  // Update the selected tab index
  selectTab(index: number): void {
    this.selectedTab = index;
  }

  // Filter projects based on the selected tab
  get filteredProjects() {
    if (this.selectedTabContent === 'All') {
      return this.projects;
    }
    return this.projects.filter((project) => project.category === this.selectedTabContent);
  }

  // Popup Functions
  openPopup(project: any): void {
    this.selectedProject = project;
    this.currentImageIndex = 0; // Reset slider index when opening popup
    this.showPopup = true;
  }

  closePopup(event: Event): void {
    if (
      (event.target as HTMLElement).classList.contains('popup') ||
      (event.target as HTMLElement).classList.contains('close-btn')
    ) {
      this.showPopup = false;
      this.selectedProject = null;
      this.currentImageIndex = 0; // Reset slider index when closing
    }
  }

  // Slider Navigation Functions
  nextImage(): void {
    if (this.selectedProject?.images && this.currentImageIndex < this.selectedProject.images.length - 1) {
      this.currentImageIndex++;
    }
  }

  prevImage(): void {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }
}