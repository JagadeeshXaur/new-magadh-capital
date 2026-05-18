import { Component } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent {
  mediaActiveTab = 'articles';

  private readonly mediaTabOrder = ['articles', 'tv'];
  private readonly mediaTabIdMap: Record<string, string> = {
    'articles': 'media-tab-articles',
    'tv': 'media-tab-tv',
  };

  setMediaTab(tab: string): void {
    this.mediaActiveTab = tab;
  }

  onMediaTablistKeydown(event: KeyboardEvent): void {
    const currentIndex = this.mediaTabOrder.indexOf(this.mediaActiveTab);
    let newIndex = currentIndex;

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      newIndex = (currentIndex + 1) % this.mediaTabOrder.length;
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      newIndex = (currentIndex - 1 + this.mediaTabOrder.length) % this.mediaTabOrder.length;
    } else {
      return;
    }

    const newTab = this.mediaTabOrder[newIndex];
    this.mediaActiveTab = newTab;
    setTimeout(() => {
      const el = document.getElementById(this.mediaTabIdMap[newTab]);
      if (el) (el as HTMLElement).focus();
    });
  }
}
