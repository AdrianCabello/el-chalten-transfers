import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { PopularRoutesComponent } from '../../components/popular-routes/popular-routes.component';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us.component';
import { FleetComponent } from '../../components/fleet/fleet.component';
import { DestinationsComponent } from '../../components/destinations/destinations.component';
import { ReviewsComponent } from '../../components/reviews/reviews.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { WhatsappFloatingComponent } from '../../components/whatsapp-floating/whatsapp-floating.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    PopularRoutesComponent,
    WhyChooseUsComponent,
    FleetComponent,
    DestinationsComponent,
    ReviewsComponent,
    FaqComponent,
    ContactFormComponent,
    FooterComponent,
    WhatsappFloatingComponent,
  ],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-destinations />
      <app-popular-routes />
      <app-why-choose-us />
      <app-fleet />
      <app-reviews />
      <app-faq />
      <app-contact-form />
      <app-footer />
    </main>
    <app-whatsapp-floating />
  `,
  styles: [
    `
      :host {
        display: block;
      }
      main {
        padding-top: 0;
      }
    `,
  ],
})
export class HomeComponent {}
