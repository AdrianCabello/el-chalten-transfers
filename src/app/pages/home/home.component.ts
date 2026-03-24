import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesComponent } from '../../components/services/services.component';
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
    DestinationsComponent,
    ContactFormComponent,
    FooterComponent,
    WhatsappFloatingComponent,
  ],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <section id="services-destinations" class="services-destinations-combined">
        <div class="container">
          <div class="services-destinations-grid">
            <div class="services-col" id="services">
              <app-services [embedded]="true" />
            </div>
            <div class="destinations-col" id="destinations">
              <app-destinations [embedded]="true" />
            </div>
          </div>
        </div>
      </section>
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
      .services-destinations-combined {
        position: relative;
        width: 100%;
        min-height: calc(100vh + 140px);
        background-image: url('/destinos1.jpg');
        background-size: cover;
        background-position: center top;
        background-attachment: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 160px 0 140px;
        color: white;
      }
      .services-destinations-combined::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: transparent;
        z-index: 1;
      }
      .services-destinations-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem 4rem;
        align-items: start;
        position: relative;
        z-index: 2;
        width: 100%;
      }
      .services-col .section-title,
      .destinations-col .column-title {
        color: var(--color-white);
        border-bottom-color: var(--color-accent);
      }
      @media (max-width: 900px) {
        .services-destinations-combined {
          min-height: auto;
          padding: 80px 0 40px;
          background-position: center;
          background-attachment: scroll;
        }
        .services-destinations-grid {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
      }
    `,
  ],
})
export class HomeComponent {}
