import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { getWhatsAppUrl } from '../../shared/constants/contact';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

export interface RouteItem {
  from: string;
  to: string;
  duration: string;
  image: string;
  messageEn: string;
  messageEs: string;
}

@Component({
  selector: 'app-popular-routes',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './popular-routes.component.html',
  styleUrl: './popular-routes.component.scss',
})
export class PopularRoutesComponent {
  private readonly i18n = inject(I18nService);
  readonly t = this.i18n.t;
  readonly lang = this.i18n.lang;

  readonly routes: RouteItem[] = [
    {
      from: 'El Calafate',
      to: 'El Chaltén',
      duration: '3',
      image: '/images/slider2.jpg',
      messageEn: 'I would like to inquire about a transfer from El Calafate to El Chaltén.',
      messageEs: 'Me gustaría consultar por un transfer de El Calafate a El Chaltén.',
    },
    {
      from: 'El Chaltén',
      to: 'Lago del Desierto',
      duration: '1.5',
      image: '/images/slider3.jpg',
      messageEn: 'I would like to inquire about a transfer from El Chaltén to Lago del Desierto.',
      messageEs: 'Me gustaría consultar por un transfer de El Chaltén a Lago del Desierto.',
    },
    {
      from: 'El Chaltén',
      to: 'Glaciar Perito Moreno',
      duration: '4',
      image: '/images/slider4.jpg',
      messageEn: 'I would like to inquire about a transfer from El Chaltén to Glaciar Perito Moreno.',
      messageEs: 'Me gustaría consultar por un transfer de El Chaltén al Glaciar Perito Moreno.',
    },
    {
      from: 'El Chaltén',
      to: 'Estancia Bonanza',
      duration: '1',
      image: '/images/slider5.jpg',
      messageEn: 'I would like to inquire about a transfer from El Chaltén to Estancia Bonanza.',
      messageEs: 'Me gustaría consultar por un transfer de El Chaltén a Estancia Bonanza.',
    },
  ];

  whatsAppUrl(route: RouteItem): string {
    const msg = this.lang() === 'es' ? route.messageEs : route.messageEn;
    return getWhatsAppUrl(msg);
  }
}
