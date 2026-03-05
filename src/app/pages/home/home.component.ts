import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesComponent } from '../../components/services/services.component';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us.component';
import { FleetComponent } from '../../components/fleet/fleet.component';
import { DestinationsComponent } from '../../components/destinations/destinations.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { WhatsappFloatingComponent } from '../../components/whatsapp-floating/whatsapp-floating.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    WhyChooseUsComponent,
    FleetComponent,
    DestinationsComponent,
    ContactFormComponent,
    FooterComponent,
    WhatsappFloatingComponent,
  ],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-destinations />
      <app-services />
      <app-why-choose-us />
      <app-fleet />
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
