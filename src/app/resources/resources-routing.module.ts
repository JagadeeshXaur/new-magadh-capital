import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourcesComponent } from './resources.component';

import { BlogsComponent } from './blogs/blogs.component';
import { MediaComponent } from './media/media.component';
import { NewslettersComponent } from './newsletters/newsletters.component';
import { TowardsAwarenessComponent } from './towards-awareness/towards-awareness.component';
import { UPIComponent } from './UPI/UPI.component';

const routes: Routes = [
  { path: '', component: ResourcesComponent, title: 'Resources | Magadh Capital' },
  { path: 'blogs', component: BlogsComponent, title: 'Our Blogs | Magadh Capital' },
  { path: 'media', component: MediaComponent, title: 'Media | Magadh Capital' },
  { path: 'newsletters', component: NewslettersComponent, title: 'Investor Letters | Magadh Capital' },
  { path: 'towards-awareness', component: TowardsAwarenessComponent, title: 'Towards Awareness | Magadh Capital' },
  { path: 'UPI', component: UPIComponent, title: 'UPI Payment | Magadh Capital' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
