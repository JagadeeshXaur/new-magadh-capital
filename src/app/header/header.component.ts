import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isScrolled = false;
  isMobileMenuOpen = false;

  @ViewChild('hamburgerBtn') hamburgerBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('mobileMenuClose') mobileMenuClose!: ElementRef<HTMLButtonElement>;

  constructor(@Inject(DOCUMENT) private document: Document, public router: Router) { }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollTop = window.pageYOffset ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop || 0;
    this.isScrolled = scrollTop > 200;
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      setTimeout(() => {
        this.mobileMenuClose?.nativeElement.focus();
      });
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    setTimeout(() => {
      this.hamburgerBtn?.nativeElement.focus();
    });
  }

  loginPage() {
    window.open('https://faconnect.kotak.bank.in/', '_blank', 'noopener,noreferrer');
  }
}
