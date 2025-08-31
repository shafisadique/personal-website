import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ScrollService } from './scroll.service';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent implements OnInit, OnDestroy {
  projects = [
    { imageSrc: '/assets/ts2.png', title: 'Travel Smart App' },
    { imageSrc: '/assets/A1.png', title: '7 Exch Admin Panel' },
    { imageSrc: '/assets/pp.png', title: '7 Exch Power Panel' },
  ];

  currentIndex = 0;
  private intervalId: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoSlide();
    }
  }

  goToProjects() {
    this.scrollService.scrollToSection('project');
  }

  contactUs() {
    this.scrollService.scrollToSection('contact');
  }

  ngOnDestroy() {
    if (this.intervalId && isPlatformBrowser(this.platformId)) {
      clearInterval(this.intervalId);
    }
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 5000);
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.projects.length) % this.projects.length;
  }

  goToImage(index: number) {
    this.currentIndex = index;
  }
}