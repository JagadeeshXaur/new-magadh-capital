import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent {
  activeTab: string = 'our_blogs'; // default

  private readonly tabOrder = ['our_blogs', 'Media', 'Investor_Letters', 'towards_awareness', 'UPI'];
  private readonly tabIdMap: Record<string, string> = {
    'our_blogs': 'res-tab-our-blogs',
    'Media': 'res-tab-media',
    'Investor_Letters': 'res-tab-investor-letters',
    'towards_awareness': 'res-tab-towards-awareness',
    'UPI': 'res-tab-upi',
  };

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment && this.tabOrder.includes(fragment)) {
        this.activeTab = fragment;
      } else {
        this.activeTab = 'our_blogs';
      }
    });
  }

  onTablistKeydown(event: KeyboardEvent): void {
    const currentIndex = this.tabOrder.indexOf(this.activeTab);
    let newIndex = currentIndex;

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      newIndex = (currentIndex + 1) % this.tabOrder.length;
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      newIndex = (currentIndex - 1 + this.tabOrder.length) % this.tabOrder.length;
    } else {
      return;
    }

    const newTab = this.tabOrder[newIndex];
    this.activeTab = newTab;
    this.router.navigate([], { fragment: newTab, relativeTo: this.route });
    setTimeout(() => {
      const el = document.getElementById(this.tabIdMap[newTab]);
      if (el) (el as HTMLElement).focus();
    });
  }
}
