import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { InvestmentProcessComponent } from './investment-process/investment-process.component';
import { InvestorFaqComponent } from './investor-faq/investor-faq.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PhilosophyComponent } from './philosophy/philosophy.component';
import { PmsfaqComponent } from './pmsfaq/pmsfaq.component';
import { ResoursesComponent } from './resourses/resourses.component';
import { RiskManagementComponent } from './risk-management/risk-management.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    HomeComponent,
    ContactUsComponent,
    TeamComponent,
    BackboneComponent,
    DifferenceComponent,
    DisclaimerComponent,
    DisclosureComponent,
    FaqsComponent,
    InspirationComponent,
    PhilosophyComponent,
    PmsfaqComponent,
    ResoursesComponent,
    RiskManagementComponent,
    NotFoundComponent,
    InvestmentProcessComponent,
    HowToInvestWithUsComponent,
    DownloadsComponent,
    GrievancesComponent,
    InvestorFaqComponent,
    LoginInComponent,
    AssistanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
