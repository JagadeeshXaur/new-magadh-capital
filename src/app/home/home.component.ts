import { AfterViewInit, Component, HostListener } from '@angular/core';
declare const bootstrap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  private carouselInstance: any;
  isPlaying = true;
  isStopped = false;

  ngAfterViewInit(): void {
    const element = document.getElementById('homeCarousel');
    if (element) {
      this.carouselInstance = new bootstrap.Carousel(element, {
        interval: 6000,
        pause: false,
        ride: false,
        touch: true,
        wrap: true
      });
      this.carouselInstance.cycle();
    }
  }

  onCarouselMouseEnter(): void {
    if (this.isPlaying && !this.isStopped) {
      this.carouselInstance?.pause();
    }
  }

  onCarouselMouseLeave(): void {
    if (this.isPlaying && !this.isStopped) {
      this.carouselInstance?.cycle();
    }
  }

  toggleCarousel(): void {
    if (this.isStopped) return;
    if (this.isPlaying) {
      this.carouselInstance?.pause();
      this.isPlaying = false;
    } else {
      this.carouselInstance?.cycle();
      this.isPlaying = true;
    }
  }

  stopCarousel(): void {
    this.carouselInstance?.pause();
    this.carouselInstance?.dispose();
    this.isPlaying = false;
    this.isStopped = true;
  }

  isScrollTopVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrollTopVisible = window.pageYOffset > 300;
  }

  scrollToTop(event: Event): void {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
