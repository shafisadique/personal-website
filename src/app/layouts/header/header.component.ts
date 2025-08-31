import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ScrollService } from '../../core/component/body/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  activeTab: string = 'HOME';
  isHidden: boolean = false;
  lastScrollTop: number = 0;
  scrollThreshold: number = 8;
  isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private scrollService: ScrollService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.updateActiveTab();
    }
  }

  scrollToSection(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
    this.activeTab = this.mapSectionToTab(sectionId);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.isBrowser) {
      this.updateActiveTab();
      this.handleScrollDirection();
    }
  }

  handleScrollDirection() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop || 0;
    const delta = currentScroll - this.lastScrollTop;

    if (Math.abs(delta) < this.scrollThreshold) {
      return;
    }

    if (currentScroll > this.lastScrollTop && currentScroll > 60) {
      this.setHeaderHidden(true);
    } else {
      this.setHeaderHidden(false);
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  setHeaderHidden(state: boolean) {
    this.isHidden = state;
    if (!this.isBrowser) return;

    const headerEl = document.querySelector('.header') as HTMLElement | null;
    if (headerEl) {
      if (state) {
        headerEl.classList.add('hidden');
      } else {
        headerEl.classList.remove('hidden');
      }
    }
  }

  updateActiveTab() {
    const sections = ['home', 'experience', 'project', 'skills', 'contact'];
    let currentSection = 'home';

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section;
          break;
        }
      }
    }

    this.activeTab = this.mapSectionToTab(currentSection);
  }

  mapSectionToTab(sectionId: string): string {
    switch (sectionId) {
      case 'home':
        return 'HOME';
      case 'experience':
        return 'EXPERIENCE';
      case 'project':
        return 'PROJECTS';
      case 'skills':
        return 'SKILLS';
      case 'contact':
        return 'CONTACT';
      default:
        return 'HOME';
    }
  }
}