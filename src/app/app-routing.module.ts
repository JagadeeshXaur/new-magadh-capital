import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssistanceComponent } from './assistance/assistance.component';
import { DownloadsComponent } from './assistance/downloads/downloads.component';
import { FaqsComponent } from './assistance/faqs/faqs.component';
import { GrievancesComponent } from './assistance/grievances/grievances.component';
import { HowToInvestWithUsComponent } from './assistance/how-to-invest-with-us/how-to-invest-with-us.component';
import { LoginInComponent } from './assistance/login-in/login-in.component';
import { BackboneComponent } from './backbone/backbone.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DifferenceComponent } from './difference/difference.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { DisclosureComponent } from './disclosure/disclosure.component';
import { HomeComponent } from './home/home.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { InvestmentProcessComponent } from './investment-process/investment-process.component';
import { InvestorFaqComponent } from './investor-faq/investor-faq.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PhilosophyComponent } from './philosophy/philosophy.component';
import { PmsfaqComponent } from './pmsfaq/pmsfaq.component';
import { ResourcesComponent } from './resources/resources.component';
import { RiskManagementComponent } from './risk-management/risk-management.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Homepage | Magadh Capital' },
  // { path: 'index', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent, title: 'Contact Us | Magadh Capital' },
  { path: 'team', component: TeamComponent, title: 'Our Team | Magadh Capital' },
  { path: 'backbone', component: BackboneComponent, title: 'The Backbone | Magadh Capital' },
  { path: 'difference', component: DifferenceComponent, title: 'Magadh Difference | Magadh Capital' },
  { path: 'disclaimer', component: DisclaimerComponent, title: 'Disclaimer | Magadh Capital' },
  { path: 'disclosure', component: DisclosureComponent, title: 'Disclosure | Magadh Capital' },
  { path: 'faqs', component: FaqsComponent, title: 'FAQ | Magadh Capital' },
  { path: 'assistance', component: AssistanceComponent, title: 'Investor Assistance | Magadh Capital' },
  { path: 'inspiration', component: InspirationComponent, title: 'Our Inspiration | Magadh Capital' },
  { path: 'philosophy', component: PhilosophyComponent, title: 'Investment Framework | Magadh Capital' },
  { path: 'pmsfaq', component: PmsfaqComponent, title: 'PMS FAQ | Magadh Capital' },
  { path: 'resources', component: ResourcesComponent, title: 'Resources | Magadh Capital' },
  { path: 'risk-management', component: RiskManagementComponent, title: 'Risk Management | Magadh Capital' },
  { path: 'investment-process', component: InvestmentProcessComponent, title: 'Investment Process | Magadh Capital' },
  { path: 'how-to-invest-with-us', component: HowToInvestWithUsComponent, title: 'How to Invest with Us | Magadh Capital' },
  { path: 'downloads', component: DownloadsComponent, title: 'Downloads | Magadh Capital' },
  { path: 'grievances', component: GrievancesComponent, title: 'Grievances | Magadh Capital' },
  { path: 'investor-faq', component: InvestorFaqComponent, title: 'Investor FAQ | Magadh Capital' },
  { path: 'login-in', component: LoginInComponent, title: 'Login | Magadh Capital' },
  { path: 'resources', loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule) },
  { path: '**', component: NotFoundComponent, title: 'Page Not Found | Magadh Capital' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
